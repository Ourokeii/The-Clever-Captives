function displayOutput() {
    var x = 5;
    
    var answer = document.getElementById("myText").value;
    
    answer = Number(answer);

    if (answer === x) {
        document.getElementById("myh1").innerText = "The door is unlocked";
        document.getElementById("result").innerText = "The passcode is correct";
        window.location.href = "https://www.google.com/search?q=javascript+code+for+taking+input&sca_esv=9dcfd037fee0fef7&rlz=1C1CHBF_enPH1131PH1131&biw=1422&bih=958&sxsrf=ADLYWIJbwutg3kH97ZlWluLym_XfyHo1EA%3A1731310334017&ei=_rIxZ_Va167T6Q_5p4gZ&ved=0ahUKEwj10dHL4dOJAxVX1zQHHfkTIgMQ4dUDCA8&uact=5&oq=javascript+code+for+taking+input&gs_lp=Egxnd3Mtd2l6LXNlcnAiIGphdmFzY3JpcHQgY29kZSBmb3IgdGFraW5nIGlucHV0MgUQABiABDIGEAAYFhgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESKhYUPkNWIBWcAd4AZABAZgBngKgAccjqgEHMjAuMTMuNbgBA8gBAPgBAZgCLKACkSSoAhDCAgcQIxgnGOoCwgIUEAAYgAQYkQIYtAIYigUY6gLYAQHCAhQQABiABBjjBBi0AhjpBBjqAtgBAcICChAjGIAEGCcYigXCAgsQABiABBiRAhiKBcICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQPCAg4QABiABBixAxiDARiKBcICDxAjGIAEGCcYigUYRhj5AcICChAAGIAEGEMYigXCAhAQLhiABBjRAxhDGMcBGIoFwgInEAAYgAQYigUYRhj5ARiXBRiMBRjdBBhGGPkBGPQDGPUDGPYD2AEBwgIIEC4YgAQYsQPCAgsQLhiABBixAxjUAsICBRAuGIAEwgIEECMYJ8ICCxAuGIAEGNEDGMcBwgINEAAYgAQYsQMYQxiKBcICDhAAGIAEGJECGLEDGIoFwgIKEAAYgAQYFBiHAsICCBAAGBYYHhgPwgIIEAAYogQYiQXCAgUQIRigAZgDFroGBggBEAEYAZIHBzIzLjE3LjSgB8n8AQ&sclient=gws-wiz-serp";

    } else {
        document.getElementById("myh1").innerText = "The door is still locked";
        document.getElementById("result").innerText = "Incorrect";
    }
}

