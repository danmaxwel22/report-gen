$(function() {

    const dev = msg => { console.log(msg) }
    var id = "",
        val = "",
        ele = ""

    setTimeout(()=> {
        $(".video-container").css("visibility", "visible")
    }, 3000)

    const isSupportedLocalStorage = () => {
        if (typeof(Storage) === "undefined") {
            return false;
        }
        return true;
    }

    const setLocalStorage = (lsName, lsValue) => {
        lsValue = JSON.stringify(lsValue)
        window.localStorage.setItem(lsName, lsValue);
    }

    const getLocalStorage = (lsName) => {
        var res = window.localStorage.getItem(lsName);
        res = JSON.parse(res)
        return res;
    }

    const gcbSettingsCustomization = {

        "updatesFieldsHide": 0,
        "updatesLabelHide": 0,
        "updatesFieldLabelText": "",
        "updatedLinksFieldsHide": 0,
        "updatedLinksLabelHide": 0,
        "updatedLinksFieldLabelText": "",
        "noteFieldsHide": 0,
        "noteLabelHide": 0,
        "noteFieldLabelText": "",
        "referenceLinkFieldsHide": 0,
        "referenceLinkLabelHide": 0,
        "referenceLinkFieldLabelText": "",
        "timeConsumedFieldsHide": 0,
        "timeConsumedLabelHide": 0,
        "timeConsumedFieldLabelText": "",

    }

    const gcbSettingsGeneral = {

        "darkmode": 1,

    }

    const settingsCustomizationArrayId = {

        "updates": ["update", "gcb-updates"],
        "updatedLinks": ["updated-links", "gcb-links"],
        "note": ["note", "gcb-notes"],
        "referenceLink": ["reference-links", "gcb-reference"],
        "timeConsumed": ["time-consumed", "gcb-time"]

    }

    // check customiation settings onload
    if(!getLocalStorage("test1.customization.settings")) {
        setLocalStorage("test1.customization.settings", gcbSettingsCustomization )
    } else {
        var parent
        var currentSettings
        var text
        $("#gc-settings-fields .form-check-input").each(function(index){
            ele = $(this)
            parent = ele.parents(".settings--item").attr("id")
            currentSettings = getLocalStorage("test1.customization.settings");

            switch(parent) {
                case "cb-updates":
                    if(ele.hasClass("rearm-field") && currentSettings.updatesFieldsHide == 1) {
                        ele.prop('checked', true);
                        $(`#${parent}`).find(".rearm-label").attr("disabled", true)
                        $(`#${settingsCustomizationArrayId.updates[0]}`).hide()
                    } else if(ele.hasClass("rearm-label") && currentSettings.updatesLabelHide == 1) {
                        ele.prop('checked', true);
                        $(`#${settingsCustomizationArrayId.updates[1]}`).hide()
                    } else {
                        text = currentSettings.updatesFieldLabelText
                        if(ele.hasClass("customization-label") && text != "") {
                            ele.prop('checked', true);
                            $(`#${parent}`).find(".custom-text").css("display", "block").val(text)
                            $(`#${settingsCustomizationArrayId.updates[1]}`).text(text)
                        }
                    }
                    break;
                case "cb-updated-links":
                    if(ele.hasClass("rearm-field") && currentSettings.updatedLinksFieldsHide == 1) {
                        ele.prop('checked', true);
                        $(`#${parent}`).find(".rearm-label").attr("disabled", true)
                        $(`#${settingsCustomizationArrayId.updatedLinks[0]}`).hide()
                    } else if(currentSettings.updatedLinksLabelHide == 1) {
                        ele.prop('checked', true);
                        $(`#${settingsCustomizationArrayId.updatedLinks[1]}`).hide()
                    } else {
                        text = currentSettings.updatedLinksFieldLabelText
                        if(ele.hasClass("customization-label") && text != "") {
                            ele.prop('checked', true);
                            $(`#${parent}`).find(".custom-text").css("display", "block").val(text)
                            $(`#${settingsCustomizationArrayId.updatedLinks[1]}`).text(text)
                        }
                    }
                    break;
                case "cb-note":
                    if(ele.hasClass("rearm-field") && currentSettings.noteFieldsHide == 1) {
                        ele.prop('checked', true);
                        $(`#${parent}`).find(".rearm-label").attr("disabled", true)
                        $(`#${settingsCustomizationArrayId.note[0]}`).hide()
                    } else if(currentSettings.noteLabelHide == 1) {
                        ele.prop('checked', true);
                        $(`#${settingsCustomizationArrayId.note[1]}`).hide()
                    } else {
                        text = currentSettings.noteFieldLabelText
                        if(ele.hasClass("customization-label") && text != "") {
                            ele.prop('checked', true);
                            $(`#${parent}`).find(".custom-text").css("display", "block").val(text)
                            $(`#${settingsCustomizationArrayId.note[1]}`).text(text)
                        }
                    }
                    break;
                case "cb-reference-link":
                    if(ele.hasClass("rearm-field") && currentSettings.referenceLinkFieldsHide == 1) {
                        ele.prop('checked', true);
                        $(`#${parent}`).find(".rearm-label").attr("disabled", true)
                        $(`#${settingsCustomizationArrayId.referenceLink[0]}`).hide()
                    } else if(currentSettings.referenceLinkLabelHide == 1) {
                        ele.prop('checked', true);
                        $(`#${settingsCustomizationArrayId.referenceLink[1]}`).hide()
                    } else {
                        text = currentSettings.referenceLinkFieldLabelText
                        if(ele.hasClass("customization-label") && text != "") {
                            ele.prop('checked', true);
                            $(`#${parent}`).find(".custom-text").css("display", "block").val(text)
                            $(`#${settingsCustomizationArrayId.referenceLink[1]}`).text(text)
                        }
                    }
                    break;
                case "cb-time-consumed":
                    if(ele.hasClass("rearm-field") && currentSettings.timeConsumedFieldsHide == 1) {
                        ele.prop('checked', true);
                        $(`#${parent}`).find(".rearm-label").attr("disabled", true)
                        $(`#${settingsCustomizationArrayId.timeConsumed[0]}`).hide()
                    } else if(currentSettings.timeConsumedLabelHide == 1) {
                        ele.prop('checked', true);
                        $(`#${settingsCustomizationArrayId.timeConsumed[1]}`).hide()
                    } else {
                        text = currentSettings.timeConsumedFieldLabelText
                        if(ele.hasClass("customization-label") && text != "") {
                            ele.prop('checked', true);
                            $(`#${parent}`).find(".custom-text").css("display", "block").val(text)
                            $(`#${settingsCustomizationArrayId.timeConsumed[1]}`).text(text)
                        }
                    }
                    break;
                default:
                    break;
            }
        })
    }

    // check general settings onload
    if(!getLocalStorage("test1.general.settings")) {
        setLocalStorage("test1.general.settings", gcbSettingsGeneral )
    } else {
        var GcurrentSettings = getLocalStorage("test1.general.settings");
        if(GcurrentSettings.darkmode == 1) {
            $("body, .modal").addClass("dark--theme")
            $("#darkmode-switcher img").attr("src", "assets/images/img/darkmode1.png")
        } else {
            $("body, .modal").removeClass("dark--theme")
        }
    }

    // check current template onload
    if(!getLocalStorage("test1.active.template")) {
        setLocalStorage("test1.active.template", 0 )
    } else {
        var TcurrentSettings = getLocalStorage("test1.active.template");

    }

    // $("#settingsTabNav").modal('show');

    $('textarea:not(".textarea")').each(function () {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    $(document).on("keydown, change", ".gc-form .form-control", function() {
        var ele = $(this);

        ele.val() ? ele.siblings("label").css("color", "#27a599")
                  : ele.siblings("label").css("color", "transparent")
    })

    $(document).on("input", ".gc-form .form-control", function(){  
        
        ele = $(this);
        id = ele.attr("id")
        val = ele.val()
        
        switch(id) {
            case "greeting":
                $("#gcb-greeting").text(val);
                break;
            case "introduction":
                $("#gcb-introduction").text(val);
                break;
            case "update-list":
                $("#gcb-link-list").text(val);
                break;
            case "reference-list":
                $("#gcb-reference-list").text(val);
                break;
            case "update":
                $("#gcb-link-list").text(val);
                break;
            case "note":
                $("#gcb-note-list").text(val);
                break;
            case "time-consumed-tt":
                $("#gcb-consumed-t").text(val);
            default:
                break;
        }
    });

    $("#time-consumed-tt").on("keypress", function(e) { e.preventDefault() })

    $(document).on("keydown", ".gc-dynamic-input textarea", function(e){
        
        var key = e.keyCode || e.charCode;
        const el = $(this)
        const parent = el.parents(".gc-dynamic-input")
      
        if(key == 13) {
            e.preventDefault()
            el.after('<textarea class="form-control shadow-none mb-1 textarea"></textarea>')
            el.next().focus()
            return;
        } 

        if(key == 8) {
            if(el.val() == "") {
                if(parent.find("textarea").length != 1) {
                    e.preventDefault()
                    el.remove();
                    parent.find("textarea").eq(parent.find("textarea").length - 1).focus()
                }
            }
            return;
        }
        
    });

    $(document).on("input", ".gc-dynamic-input textarea", function(){
        const parent = $(this).parents(".gc-dynamic-input")

        let ctr = parent.find("textarea").length;
        let currHtml = "";
        let leadChar = parent.find("textarea").val() ? "- " : "";

        for(let i = 0; i < ctr; i++) {
            currHtml += leadChar + parent.find("textarea").eq(i).val() + "<br />"
        }

        $(`#gcb-${parent.attr("id")}-list`).html(currHtml);
        
    });

    $(document).on("change", "#gc-settings-fields .form-check-input", function(){
        
        const el = $(this)
        const parent = el.parents(".settings--item")

        if(el.hasClass("rearm-field")) {
            if(el.is(':checked')) {
                parent.find(".rearm-label").prop("checked", true).attr("disabled", true)
                parent.find(".customization-label").attr("disabled", true)
            } else {
                parent.find(".customization-label").attr("disabled", false)
                parent.find(".rearm-label").prop("checked", false).attr("disabled", false)
            }
        } else if(el.hasClass("customization-label")) {
            if(el.is(':checked')) {
                parent.find(".custom-text").css("display", "block")
            } else {
                parent.find(".custom-text").css("display", "none")
            }
        }

    });

    $(document).on("click", ".copy-clipboard.copy", function() {
        const containerid = "clipboardToCopy"; 
        const el = $(this)
        el.addClass("gcb-selected");
        el.find("span").text("copied")

        setTimeout(function(){
            el.removeClass("gcb-selected");
            el.find("span").text("copy")
        }, 1200)

        if (window.getSelection) {
            if (window.getSelection().empty) { // Chrome
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges) { // Firefox
                window.getSelection().removeAllRanges();
            }
        } else if (document.selection) { // IE?
            document.selection.empty();
        }
    
        if (document.selection) {
            var range = document.body.createTextRange();
            range.moveToElementText(document.getElementById(containerid));
            range.select().createTextRange();
            document.execCommand("copy");
        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(document.getElementById(containerid));
            window.getSelection().addRange(range);
            document.execCommand("copy");
        }
    })

    $("#logo-gcb").on("mouseover", function() {
        $("#body").css({opacity: "0", transition: "opacity 1s"})
    }).on("mouseout", function() {
        $("#body").css({opacity: "1", transition: "opacity 2s"})
    })
    

    $(document).on("click", "#darkmode-switcher", function() {
        ele = $(this)
        var darkModeImg = ele.find("img").attr("src");
        var currentSettings = getLocalStorage("test1.general.settings");
        if(currentSettings) {
            $(".modal").toggleClass("dark--theme")
            ele.find("img").attr("src", darkModeImg == "assets/images/img/darkmode1.png" ? "assets/images/img/darkmode.png" : "assets/images/img/darkmode1.png")
        }
    })

    $(document).on("click", "#save--settings", function(){
        if(!isSupportedLocalStorage) {
            alert("Local Storage is not supported!");
            return false;
        }

        if(getLocalStorage("test1.customization.settings")) {
            var currentSettings = getLocalStorage("test1.customization.settings");
            var parent = "";
            var text = "";

            $("#gc-settings-fields .form-check-input").each(function(index){
                ele = $(this)
                parent = ele.parents(".settings--item").attr("id")

                switch(parent) {
                    case "cb-updates":
                        if(ele.hasClass("rearm-field")) {
                            if(ele.is(':checked')) {
                                currentSettings.updatesFieldsHide = 1
                                $(`#${settingsCustomizationArrayId.updates[0]}`).hide()
                                $(`#${settingsCustomizationArrayId.updates[1]}`).hide()
                            } else {
                                currentSettings.updatesFieldsHide = 0
                                $(`#${settingsCustomizationArrayId.updates[0]}`).show()
                                $(`#${settingsCustomizationArrayId.updates[1]}`).show()
                            }
                        } else if(ele.hasClass("customization-label")) {
                            if(ele.is(':checked')) {
                                text = $(`#${parent}`).find(".custom-text").val()
                                currentSettings.updatesFieldLabelText = text
                                $(`#${settingsCustomizationArrayId.updates[1]}`).text(text ? text : "")
                            } else {
                                currentSettings.updatesFieldLabelText = "";
                                $(`#${settingsCustomizationArrayId.updates[1]}`).text("Here are the latest updates:")
                            }
                        } else {
                            if(ele.is(':checked')) {
                                currentSettings.updatesLabelHide = 1
                                $(`#${settingsCustomizationArrayId.updates[1]}`).hide()
                            } else {
                                currentSettings.updatesLabelHide = 0
                                $(`#${settingsCustomizationArrayId.updates[1]}`).show()
                            }
                        }
                        break;
                    case "cb-updated-links":
                        if(ele.hasClass("rearm-field")) {
                            if(ele.is(':checked')) {
                                currentSettings.updatedLinksFieldsHide = 1
                                $(`#${settingsCustomizationArrayId.updatedLinks[0]}`).hide()
                                $(`#${settingsCustomizationArrayId.updatedLinks[1]}`).hide()
                            } else {
                                currentSettings.updatedLinksFieldsHide = 0
                                $(`#${settingsCustomizationArrayId.updatedLinks[0]}`).show()
                                $(`#${settingsCustomizationArrayId.updatedLinks[1]}`).show()
                            }
                        } else if(ele.hasClass("customization-label")) {
                            if(ele.is(':checked')) {
                                text = $(`#${parent}`).find(".custom-text").val()
                                currentSettings.updatedLinksFieldLabelText = text
                                $(`#${settingsCustomizationArrayId.updatedLinks[1]}`).text(text ? text : "")
                            } else {
                                currentSettings.updatedLinksFieldLabelText = ""
                                $(`#${settingsCustomizationArrayId.updatedLinks[1]}`).text("Updated Links:")
                            }
                        } else {
                            if(ele.is(':checked')) {
                                currentSettings.updatedLinksLabelHide = 1
                                $(`#${settingsCustomizationArrayId.updatedLinks[1]}`).hide()
                            } else {
                                currentSettings.updatedLinksLabelHide = 0
                                $(`#${settingsCustomizationArrayId.updatedLinks[1]}`).show()
                            }
                        }
                        break;
                    case "cb-note":
                        if(ele.hasClass("rearm-field")) {
                            if(ele.is(':checked')) {
                                currentSettings.noteFieldsHide = 1
                                $(`#${settingsCustomizationArrayId.note[0]}`).hide()
                                $(`#${settingsCustomizationArrayId.note[1]}`).hide()
                            } else {
                                currentSettings.noteFieldsHide = 0
                                $(`#${settingsCustomizationArrayId.note[0]}`).show()
                                $(`#${settingsCustomizationArrayId.note[1]}`).show()
                            }
                        } else if(ele.hasClass("customization-label")) {
                            if(ele.is(':checked')) {
                                text = $(`#${parent}`).find(".custom-text").val()
                                currentSettings.noteFieldLabelText = text
                                $(`#${settingsCustomizationArrayId.note[1]}`).text(text ? text : "")
                            } else {
                                currentSettings.noteFieldLabelText = ""
                                $(`#${settingsCustomizationArrayId.note[1]}`).text("Notes:")
                            }
                        } else {
                            if(ele.is(':checked')) {
                                currentSettings.noteLabelHide = 1
                                $(`#${settingsCustomizationArrayId.note[1]}`).hide()
                            } else {
                                currentSettings.noteLabelHide = 0
                                $(`#${settingsCustomizationArrayId.note[1]}`).show()
                            }
                        }
                        break;
                    case "cb-reference-link":
                        if(ele.hasClass("rearm-field")) {
                            if(ele.is(':checked')) {
                                currentSettings.referenceLinkFieldsHide = 1
                                $(`#${settingsCustomizationArrayId.referenceLink[0]}`).hide()
                                $(`#${settingsCustomizationArrayId.referenceLink[1]}`).hide()
                            } else {
                                currentSettings.referenceLinkFieldsHide = 0
                                $(`#${settingsCustomizationArrayId.referenceLink[0]}`).show()
                                $(`#${settingsCustomizationArrayId.referenceLink[1]}`).show()
                            }
                        } else if(ele.hasClass("customization-label")) {
                            if(ele.is(':checked')) {
                                text = $(`#${parent}`).find(".custom-text").val()
                                currentSettings.referenceLinkFieldLabelText = text
                                $(`#${settingsCustomizationArrayId.referenceLink[1]}`).text(text ? text : "")
                            } else {
                                currentSettings.referenceLinkFieldLabelText = ""
                                $(`#${settingsCustomizationArrayId.referenceLink[1]}`).text("Reference Link:")
                            }
                        } else {
                            if(ele.is(':checked')) {
                                currentSettings.referenceLinkLabelHide = 1
                                $(`#${settingsCustomizationArrayId.referenceLink[1]}`).hide()
                            } else {
                                currentSettings.referenceLinkLabelHide = 0
                                $(`#${settingsCustomizationArrayId.referenceLink[1]}`).show()
                            }
                        }
                        break;
                    case "cb-time-consumed":
                        if(ele.hasClass("rearm-field")) {
                            if(ele.is(':checked')) {
                                currentSettings.timeConsumedFieldsHide = 1
                                $(`#${settingsCustomizationArrayId.timeConsumed[0]}`).hide()
                                $(`#${settingsCustomizationArrayId.timeConsumed[1]}`).hide()
                            } else {
                                currentSettings.timeConsumedFieldsHide = 0
                                $(`#${settingsCustomizationArrayId.timeConsumed[0]}`).show()
                                $(`#${settingsCustomizationArrayId.timeConsumed[1]}`).show()
                            }
                        } else if(ele.hasClass("customization-label")) {
                            if(ele.is(':checked')) {
                                text = $(`#${parent}`).find(".custom-text").val()
                                currentSettings.timeConsumedFieldLabelText = text
                                $(`#${settingsCustomizationArrayId.timeConsumed[1]}`).text(text ? text : "")
                            } else {
                                currentSettings.timeConsumedFieldLabelText = ""
                                $(`#${settingsCustomizationArrayId.timeConsumed[1]}`).text("Time Consumed:")
                            }
                        } else {
                            if(ele.is(':checked')) {
                                currentSettings.timeConsumedLabelHide = 1
                                $(`#${settingsCustomizationArrayId.timeConsumed[1]}`).hide()
                            } else {
                                currentSettings.timeConsumedLabelHide = 0
                                $(`#${settingsCustomizationArrayId.timeConsumed[1]}`).show()
                            }
                        }
                        break;
                    default:
                        break;
                }
            })
            setLocalStorage("test1.customization.settings", currentSettings )
        }

        if(getLocalStorage("test1.general.settings")) {
            var GcurrentSettings = getLocalStorage("test1.general.settings");
            if($("#settingsTabNav").hasClass("dark--theme")) {
                GcurrentSettings.darkmode = 1;
                $("body").addClass("dark--theme")
            } else {
                GcurrentSettings.darkmode = 0;
                $("body").removeClass("dark--theme")
            }
            setLocalStorage("test1.general.settings", GcurrentSettings )
        }
    })

    var delay = 13000
    $(".toast").each( function(index){
        delay = delay + 2000
        $(".toast").eq(index).toast({
            autohide: true,
            animation: true,
            delay: delay
        });
    });
    $(".toast").toast("show");

});