'use client'

import { Editor } from '@tinymce/tinymce-react'
import { useRef, useState } from 'react'

const CreateNewArticle = () => {
  const [valueEditor, setValueEditor] = useState<string>('')
  const handleEditorChange = (value: any) => {
    console.log(value)
    setValueEditor(value)
  }
  return (
    <div className='min-h-dvh'>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
        value={valueEditor}
        onEditorChange={handleEditorChange}
      />
    </div>
  )
}

export default CreateNewArticle
