  function encryption()  {
    var name = document.getElementById('base64en').value;
    name = btoa(encodeURIComponent(name));
    document.getElementById("base64en-ans").value = name;
  }

  function decryption()  {
    var name = document.getElementById('base64de').value;
    name = decodeURIComponent(atob(name));
    document.getElementById("base64de-ans").value = name;
  }

  function copyEnAns() {    
    var copyText = document.getElementById('base64en-ans');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("Copy");
  }

  function copyDeAns() {    
    var copyText = document.getElementById('base64de-ans');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("Copy");
  }