# Yahoo API

I am using `yahoo-fantasy` npm package to access the Yahoo API. It appears to still work, though it is very much expecting you to be building an Express application.

For some reason I can no longer log into Yahoo on my own account, only Mel's. I have to interact with Yahoo in private browsing.

I made a new Development Yahoo Application for this.

https://developer.yahoo.com/apps/bQrX0hZS/

Yahoo Apps require you to specify an `https` redirect endpoint, and this endpoint must match the endpoint specified when requesting auth.

I am going to use https://medium.com/@nitinpatel_20236/how-to-create-an-https-server-on-localhost-using-express-366435d61f28 to serve a local, self-signed SSL certificate to simulate https locally.

I had to manually add the SSL certificate to Apple Keychain for Chrome to accept it.
https://superuser.com/a/1296598
You must mark the certificate to "Always trust"

This works, but gives a ERR_CERT_COMMON_NAME_INVALID in Chrome.
I am trying again to make a certificate with a Subject Alternative Name encoded.
https://serverfault.com/a/845788
