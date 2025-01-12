const vscode = require('vscode');
const path = require('path');

function activate(context) {
    // Komenda do otwierania 3 plików
    let runThreeFiles = vscode.commands.registerCommand('extension.runThreeFiles', () => {
        const files = ['js.ext', 'mysql.ext', 'php.ext'];
        openFiles(context, files);
    });

    // Komenda do otwierania 1 pliku
    let runOneFile = vscode.commands.registerCommand('extension.runOneFile', () => {
        const files = ['gimp.ext'];
        openFiles(context, files);
    });

    // Komenda do otwierania 4 plików
    let runFourFiles = vscode.commands.registerCommand('extension.runFourFiles', () => {
        const files = ['podstawyhtml.ext', 'podstawyjs.ext', 'podstawymysql.ext', 'podstawyphp.ext'];
        openFiles(context, files);
    });

    // Rejestracja komend
    context.subscriptions.push(runThreeFiles, runOneFile, runFourFiles);
}

// Funkcja do otwierania plików w edytorze
function openFiles(context, fileNames) {
    fileNames.forEach(file => {
        const filePath = path.join(context.extensionPath, 'resources', file);
        vscode.workspace.openTextDocument(filePath).then(doc => {
            vscode.window.showTextDocument(doc, { preview: false, viewColumn: vscode.ViewColumn.Active });
        }).catch(err => {
            vscode.window.showErrorMessage(`Nie można otworzyć pliku: ${file}. Błąd: ${err.message}`);
        });
    });
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
