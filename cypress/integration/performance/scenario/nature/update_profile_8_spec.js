describe("scenario_008  for Nature test", () => {
    it("update profile", () => {
        cy.visit("https://idp-personal-authenticator.springernature.com/login/nature?response_type=code&redirect_uri=https%3A%2F%2Fidp.springernature.com%2Fauthed%2Fsso&state=eyJjdHkiOiJKV1QiLCJlbmMiOiJBMTI4R0NNIiwiYWxnIjoiZGlyIn0..sut7EajY_voAyZ6a.8jC7mLa1rAk_wh545fqryZG-DP8tiGGqD9UGZv1LhwE3q0-nUfh1naxfdCM85tt6iiS8T2QhPS0z29HgKFcJzDtTUgRMZqA9o8NNORlCz3p_86V4GTTTtQOyN1Nwv_wuxoWTWog8lN0PMRbK2TcoPo2cNMnObLw1VQ-A7ltuqq-FlX8StGRzpuObGU4saBKFvXfHfOR-tvFgH5dJ0Zudgvz9zhnCWF72jMv9UEvFhaz7TeootJlDbDmZNPR8coqkr4a-v51wrfvc_ntJbP7oanU6aDLgyUBWxr8Cn1mVebrJC9o7PWNa8QLZmLazyiPrSsgrWkhWRKEvsnO6l6uDkDODZOUyJdg4YGaa4DoPizUuGVyF-M6_NNl43nFTg6fH0A_JvOhoAoycyBBxNXkDf5qVbmMrOoqk-V1-UY45x8Rm2w8HAq5t6OdjlmUnMuGJZk0ZDXuLerwupWSc3K9XUXfIgp3JKx5jY_WAdB0crhUli8jy8WBiF4pSWe9diFnl24YjmKAhoLzmAts900G3sU_bp8qkGwHcx0DSVnxSZJ08dhpLjKQU6KW6eTweJsRTl15o7WL3g3JsNW4Kp8-laST1XM7d_f1N1nMd5EdxkKg6vVve1I9V0yNCxPZ-qkz-XpzewPY3UKQI-ofavaGZ8xtKmxB7PqVR511lB-JN4MYTKho0nhKnxyQNrOYqKEwNfNQICJfIZyKvNj3Li_AIykS-4L1Aq5pIbmUw_6lT4tL8B9KRYvkTJ4VUk688sfWJgi5W8SfDaN3dfLRtjPwB70LyMU-faEnaPydwVtn0-M62aF6zlLbjqUM4EX_bYzhsMUMKtJ11jw3pDZOIA4zf74i15N9evXi9CBvNWKZB6a13CbFuM8bMLJZtH_Ih3cVrIcFqTLYcjjvoFsHBDYG4tUQmy0DLOu0RcOmPY8eizNEB56SAJzXlHlJQPmRtW5u5_tRg8LUiAz-vU9PpKqpBaBQyBfF8ax1m6BCIPU03ngXSXjguEJ4M9bVutKcG5KyzUx_HDAIFDFCQHtrAICfSvisetBXjSqxOf1HFfjVNv2wx0OuLx1BlNaT4HxsLHJpSv3GfKEoxpAUg9yXcnfwYYOmJGporaChAqECLgpnvU87f06iSMB1pWYT0haB1ZLzi0BHANMbieFKa0PemjsjrIM3eLLwfXuPGW0Y03Tv2y1TP-wgNl42NZAr9GChMF8pIHFybV-Cz7dxVbPfoZdj-TwIyJPElTCjyjV5o24MnpO1N1CxYamM8JI4q-iMk71aF9bhPlj_CBi0fIeOkQuH5JLPz8IIZurFD3wp_vdPqUKwHkDxQ.aQrN9if65KoLn9QBhbzZvA&target_redirect_uri=https://www.nature.com/my-account");
        cy.get('input[id="login-username"]').clear();
        cy.get('input[id="login-username"]').type("qiaotl@163.com");
        cy.get('input[id="login-password"]').clear();
        cy.get('input[id="login-password"]').type("abc123456");
        cy.get('button[id="login-submit"]').click();
        cy.get('a[href="https://idp.nature.com/natureuser/profile"]').click();
        cy.get('button[id="change-personal-info"]').click();
    })
});