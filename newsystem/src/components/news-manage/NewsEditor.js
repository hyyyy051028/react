import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { ContentState } from 'draft-js';
import { EditorState } from 'draft-js';

export default function NewsEditor(props) {
  // 初始化编辑器状态为空的 EditorState
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // 监听 props.content 变化并初始化编辑器内容
  useEffect(() => {
    const html = props.content;
    if (html) {
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        const editorState = EditorState.createWithContent(contentState);
        setEditorState(editorState);
      }
    }
  }, [props.content]);

  // 编辑器内容变化时更新状态
  const handleEditorStateChange = (newState) => {
    setEditorState(newState);
  };

  // 处理编辑器失去焦点时的逻辑
  const handleBlur = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContent);

    console.log(htmlContent); // 在控制台输出 HTML 内容

    // 将 HTML 内容传递给父组件
    if (props.getContent) {
      props.getContent(htmlContent);
    }
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbar-class"
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        onEditorStateChange={handleEditorStateChange}
        onBlur={handleBlur}
      />
    </div>
  );
}
