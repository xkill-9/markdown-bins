import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/theme/monokai.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';

class BinsEditor extends Component {
  handleOnEditorChange(content) {
    Meteor.call('bins.update', this.props.bin, content);
  }

  render() {
    return (
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          value={this.props.bin.content}
          onChange={ this.handleOnEditorChange.bind(this) }
          options={{ mode: 'markdown', lineNumbers: true, theme: 'monokai' }} />
      </div>
    )
  }
}

export default BinsEditor;