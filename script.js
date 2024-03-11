function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }
    );
  }

  google.accounts.id.prompt();