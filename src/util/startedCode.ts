import * as vscode from "vscode"
import { snippets } from "../data/snippets";

export default function addStarterCodeCPP(type: 'SingleTestCase' | 'MultipleTestCase') {
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) { return; }
    activeEditor.edit(editBuilder => editBuilder.insert(new vscode.Position(0, 0), snippets[type]))
}