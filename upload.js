$(function () {
  // put your own error messages and/or message translation logic here

  var errorMessages = {
    REQUIRED: "This field is required",
    UNIQUE: "This value already exists",
    TYPE: "Invalid data type",
    REGEX: "Invalid data format",
    number: "Must be an integer number",
    money: "Must be a number with max two decimals",
    JSON: "Not a valid JSON",
    float_number: "Must be a decimal number",
    email: "Must be a valid email",
    FILESIZE: "Upload exceeds file size limit per field (max 1 MB)",
    UPLOADERROR: "Unable to upload file, please try again",
    GENERIC_ERROR: "A server error occured, please reload page",
  };

  var successMessage =
    "Thank you for your application!<br> We appreciate you taking the time to apply for the role, as well as for your interest in Responsive. <br> If your application and experience align with what we are looking for to fill this role, a recruiter will be in touch with you soon.";

  // enable javascript datetimepicker unless supported
  // Docs and settings: http://xdsoft.net/jqplugins/datetimepicker/

  $.datetimepicker.setLocale("en");

  // if missing support for datetime, then use jquery.datetimepicker

  if (!Modernizr.inputtypes.datetime) {
    $("input[data-type=date]").datetimepicker({ timepicker: false, format: "Y/m/d" }).attr("type", "text");
    $("input[data-type=datetime]").datetimepicker({}).attr("type", "text");
    $("input[data-type=time]").datetimepicker({ datepicker: false, format: "H:i", value: "12:00" }).attr("type", "text");
  }

  $("#applications-form input[data-type=file], #applications-form input[data-type=image]").on("change", function () {
    $(this).data("uploadedfiles", []);
  });
  var apikey = "5e9961cb436377171a0c24cc"; // TODO: INSERT YOUR CORS API KEY HERE OR add formapikey to settings

  if (!apikey) alert("5e9961cb436377171a0c24cc");

  var ajaxSettings = {
    async: true,
    crossDomain: true,
    url: "https://frontend-8e4d.restdb.io/rest/applications",
    method: "POST",
    headers: {
      "x-apikey": apikey,
      "content-type": "application/json",
    },
    processData: false,
  };

  var ajaxSettingsAttachments = {
    async: true,
    url: "https://frontend-8e4d.restdb.io/media",
    method: "POST",
    contentType: false,
    headers: {
      "x-apikey": apikey,
    },
    cache: false,
    processData: false,
  };

  function uploadAttachment(item) {
    var deferred = $.Deferred();
    var datatype = $(item).attr("data-type");
    var element_name = $(item).attr("name");
    var formData = new FormData();
    var files = $(item)[0].files;
    var totalsize = 0;
    var files_to_upload = [];
    _.each(files, function (file) {
      // ignore non-images
      if (datatype === "image" && !file.type.match("image.*")) {
        return;
      } else {
        files_to_upload.push(file);
        totalsize += file.size;
      }
    });

    // check max upload file size for development plan
    if (totalsize <= 1000000) {
      _.each(files_to_upload, function (file) {
        formData.append(element_name, file, file.name);
      });
      var asa = _.clone(ajaxSettingsAttachments);
      asa.xhr = function () {
        var xhr = new window.XMLHttpRequest();
        xhr.upload.addEventListener(
          "progress",
          function (evt) {
            if (evt.lengthComputable) {
              var percentComplete = evt.loaded / evt.total;
              percentComplete = parseInt(percentComplete * 100) + "%";
              $("#" + element_name + "_progress").css("width", percentComplete);
            }
          },
          false
        );
        return xhr;
      };
      asa.data = formData;
      var uploadedbefore = $(item).data("uploaded");
      if (!uploadedbefore) {
        $("#" + element_name + "_progress")
          .parent()
          .removeClass("hidden");
        $("#btn-submit").button("loading");
        $.ajax(asa)
          .success(function (data) {
            var result = data.ids || [];
            var successObj = {};
            successObj[element_name] = result;
            $(item).data("uploaded", result);
            deferred.resolve(successObj);
          })
          .fail(function () {
            deferred.reject({ field: element_name, error: errorMessages.UPLOADERROR });
          });
      } else {
        var obj = {};
        obj[element_name] = uploadedbefore;
        deferred.resolve(obj);
      }
    } else {
      deferred.reject({ field: element_name, error: errorMessages.FILESIZE });
    }
    return deferred.promise();
  }

  function postForm() {
    // clear errors
    $("#applications-form .has-error").removeClass("has-error");
    $("#applications-form .help-block").remove();

    $("#btn-submit").button("loading");

    // we need to reformat date, datetime, datetime-local and time to ISO date strings

    $("input[data-type=datetime],input[data-type=datetime-local]").each(function () {
      var theDate = $(this).val();
      if (theDate) {
        var isodate_str = new Date(theDate).toISOString();
        $(this).val(isodate_str);
      }
    });

    $("input[data-type=date]").each(function () {
      var theDate = $(this).val();
      if (theDate) {
        theDate += " GMT";
        var isodate_str = new Date(theDate).toISOString();
        $(this).val(isodate_str);
      }
    });

    $("input[data-type=time]").each(function () {
      var timeval = $(this).val();
      if (timeval) {
        var regex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        if (timeval.match(regex)) {
          var isodate_str = new Date("1970-01-01T" + $(this).val() + ":00Z").toISOString();
          $(this).val(isodate_str);
        }
      }
    });

    // get the form data
    var formObj = $("#applications-form").serializeObject();

    // get attachments from inputs
    var attachments = [];

    $("#applications-form input[data-type=file], #applications-form input[data-type=image]").each(function (input) {
      var files = $(this)[0].files;
      if (files && files.length > 0) {
        attachments.push($(this));
      }
    });

    var attachFuncs = [];
    _.each(attachments, function (attachment) {
      attachFuncs.push(uploadAttachment(attachment));
    });

    // upload all attachments and return with ids when done
    $.when
      .apply(null, attachFuncs)
      .done(function () {
        // get the attachment id's from arguments and store into form obj

        _.each(arguments, function (fieldObj) {
          formObj = _.assign(formObj, fieldObj);
        });

        // submit the whole form with attachment ids

        ajaxSettings.data = JSON.stringify(formObj);
        $.ajax(ajaxSettings)
          .done(function (response) {
            // replaces form with a thank you message, please replace with your own functionality
            $("#applications-form").replaceWith("<div class='thank-you'>" + successMessage + "</div>");
            sendEmail();
          })
          .fail(function (response) {
            $("#btn-submit").button("reset");
            var error = response.responseJSON;
            if (error && error.name === "ValidationError") {
              _.each(error.list, function (fielderr) {
                var inputSelector = "[name=" + fielderr.field + "]";
                var errorMessageCode = fielderr.message[1];
                var errorMessage = errorMessages[errorMessageCode] || "Invalid value";
                if (errorMessageCode === "TYPE") {
                  var fieldType = $(inputSelector).data("type");
                  errorMessage = errorMessages[fieldType] || "Invalid value";
                }
                $(inputSelector).after("<div class='help-block'>" + errorMessage + "</div>");
                $(inputSelector).parents(".form-group").addClass("has-error");
              });
            } else {
              var msg = ajaxSettings.headers["x-apikey"] && ajaxSettings.headers["x-apikey"].length < 24 ? "Missing API-key" : "Server Error";
              alert(msg);
            }
          });
      })
      .fail(function (response) {
        $("#btn-submit").button("reset");
        if (response.field && response.error) {
          var inputSelector = "[name=" + response.field + "]";
          $(inputSelector).after("<div class='help-block'>" + response.error + "</div>");
          $(inputSelector).parents(".form-group").addClass("has-error");
        } else {
          var errorMessage = errorMessages.GENERIC_ERROR || "Problem submitting form";
          $("#fg-errors")
            .addClass("has-error")
            .append("<div class='help-block'>" + errorMessage + "</div>");
        }
      });
  }

  $("#applications-form").submit(function (event) {
    postForm();
    event.preventDefault();
    return false;
  });
});

function sendEmail() {
  const obj = {
    to: "christina.joergensen@hotmail.com",
    subject: "New application submittet",
    html: "<p>Someone is eager to join the Responsive team.<br> You will find the application in the database. <br><b> <a href='https://frontend-8e4d.restdb.io/home/db/frontend-8e4d/cards/5fd912cd734d315500010fe1'>Link to database</a></b></p>",
    company: "Responsive A/S",
    sendername: "Responsive.dk",
  };

  fetch("https://frontend-8e4d.restdb.io/mail", {
    method: "POST",
    headers: {
      "x-apikey": "5e9961cb436377171a0c24cc",
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.error) {
        console.error(response.error);
      } else {
        console.log(response);
      }
    });
}
