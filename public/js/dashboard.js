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

//deleting blog post
const deleteBtns = document.querySelectorAll(".deleteBtn")
deleteBtns.forEach(delBtn=>{
    delBtn.addEventListener("click",e=>{
        const blogId = e.target.getAttribute("data-id")
        console.log(blogId);
        fetch(`/api/blogs/${blogId}`,{
            method:"DELETE"
        }).then(res=>{
            if(res.ok){
                location.reload();
            } else {
                alert("error deleting blog")
            }
        })
    })
})