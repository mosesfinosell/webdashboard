// import React,{useState} from 'react'
// import { EditorState, convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';



// export default function BlogEditor() {
//     const [editorState, setEditorState] = useState(EditorState.createEmpty());
    
//     function onEditorStateChange(){
//         setEditorState(editorState);
//     }

//     return (
// 			<div>
// 				<Editor
// 					editorState={editorState}
// 					wrapperClassName='demo-wrapper'
// 					editorClassName='demo-editor'
// 					onEditorStateChange={onEditorStateChange}
// 				/>
// 				<textarea
// 					disabled
// 					value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
// 				/>
// 			</div>
// 		);

// }