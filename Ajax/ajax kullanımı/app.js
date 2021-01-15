// Hatalar--HTTP Status
    // 200:OK
    // 403:Forbidden
    // 404:Not Found
    // 505:Internal server Error

    // readyState	Holds the status of the XMLHttpRequest.
    //     0: request not initialized
    //     1: server connection established
    //     2: request received
    //     3: processing request
    //     4: request finished and response is ready

document.getElementById("btn").addEventListener("click",function(){

    //XMLHttpRequest
        const xhr=new XMLHttpRequest();
        // console.log(xhr);
                xhr.onload=function(){
                    if(this.status===200){
                    document.getElementById("ajax").textContent=this.responseText;
                    }
                }

            // Eski Yöntem
        // xhr.onreadystatechange=function(){
        //     // console.log(this.readyState);
        //     // console.log(this.status);
        //             // Response Hazır
        //     if(this.status==200 && this.readyState==4){
        //         console.log(this.responseText);
        //     }
        // }
        xhr.open("GET","exampple.txt",true);

        xhr.send();
})