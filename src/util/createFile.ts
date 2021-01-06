import { join } from "path";
import * as vscode from "vscode"

export default function createFile(fileName: string) {
    const wsedit = new vscode.WorkspaceEdit();
    const workspaceFolders = vscode.workspace.workspaceFolders
    if (!workspaceFolders) { return; }
    const wsPath = workspaceFolders[0].uri.fsPath; // gets the path of the first workspace folder
    if (!wsPath) { return; }
    const filePath = vscode.Uri.file(join(wsPath, fileName));
    vscode.window.showInformationMessage(filePath.toString());
    wsedit.createFile(filePath, { ignoreIfExists: true });
    vscode.workspace.applyEdit(wsedit);
    vscode.window.showInformationMessage('Created a new file: hello/world.md');
}