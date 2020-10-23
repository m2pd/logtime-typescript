export const parseToken = (data:string) => {
    localStorage.setItem("token", data)
    var token = localStorage.getItem("token");


    if(token){
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        var infoUser = JSON.parse(jsonPayload);
        localStorage.setItem("infoUser", JSON.stringify(infoUser));
    
        return infoUser;
    
    }
}