console.log("dashboard js linked")

const blogForm=document.querySelector('#blogForm');
blogForm.addEventListener("submit", e=> {
    e.preventDefault();
    console.log(`Prevented Default`)
    const blog_title= document.querySelector('#blog-title').value
    const blog_content=document.querySelector('#blog-content').value

    const blogObj = {
        title:blog_title,
        content: blog_content

    }
    
    console.log(blogObj)
    fetch("/api/blogs",{
        method:"POST",
        body:JSON.stringify(blogObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then (res=>{
        if(res.ok){
            console.log(res)
            alert("blog added!")
            location.reload()
        } else {
            alert("error posting blog")
        }
    })
}) 