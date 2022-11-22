const commentForm = document.querySelector("#commentForm");
commentForm.addEventListener("submit",e=>{
    e.preventDefault();
    console.log('PREVENTED DEFAULT!')
    const commentObj = {
        comment_text:document.querySelector("#comment_text").value,
    }
    fetch("/api/comments/",{
        method:"POST",
        body:JSON.stringify(commentObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            alert("comment added!")
            location.reload()
        } else {
            alert("error posting comment")
        }
    })
})