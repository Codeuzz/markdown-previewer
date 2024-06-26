export function Editor({value, onChange, maximize}) {
    return (
        <div id="main-div">
        <div id="main-title">
          <h4>Editor</h4>
          <span id="maximize-btn" onClick={maximize}>
            <i id="icon" class="fa-solid fa-maximize"></i>
          </span>
        </div>
        <textarea id="editor" spellCheck={false} value={value} onChange={onChange} placeholder="Enter your Markdown here..."></textarea>
      </div>
    )
}