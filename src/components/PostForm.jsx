import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useNavigate } from "react-router-dom";

import { stateToHTML } from "draft-js-export-html"; // ✅ import









function PostForm() {
  const navigate = useNavigate(); // <-- add this

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());



  const handleSubmit = async (e) => {
    e.preventDefault();

    const contentHTML = stateToHTML(editorState.getCurrentContent()); // convert to HTML


    // ✅ you have all the form data in state now
    const postData = {
      title,
      subtitle,
      cover_img: coverImg,
      content: contentHTML, // this is HTML from Quill
    };


    // Example: send to backend with fetch
      fetch("/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Post saved:", data);

        // 3. Redirect to main page
        navigate("/"); // "/" is your main page route
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input100"
        type="text"
        name="title"
        placeholder="Title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <input
        className="input100"
        type="text"
        name="subtitle"
        placeholder="Subtitle"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />
      <br /><br />

      <input
        className="input100"
        type="text"
        name="cover_img"
        placeholder="Cover Image URL"
        value={coverImg}
        onChange={(e) => setCoverImg(e.target.value)}
      />
      <br /><br />

      {/* ✅ React Quill replaces hidden input + div#editor */}
      <div className="editor-wrapper">

       <Editor 
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={setEditorState}
        editorStyle={{ minHeight: "200px", border: "1px solid #ccc", padding: "5px", borderRadius: "10px" }}
        
      />
      </div>

      <br /><br />
  

      <button
        id="sendPostButton"
        className="btn btn-primary text-uppercase"
        type="submit"
      >
        Publish
      </button>
    </form>
  );
}

export default PostForm;
