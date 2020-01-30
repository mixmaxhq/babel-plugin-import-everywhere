export default function plugin({ types: t, template }) {
  return {
    manipulateOptions(opts) {
      opts.parserOpts.allowImportExportEverywhere = true;
    },

    visitor: {
      ImportDeclaration(path) {
        if (!path.parentPath.isProgram()) {
          path.replaceWith(template.statement.ast`
            const ${path.node.specifiers[0].local} = require(${path.node.source});
          `);
        }
      },
    },
  };
}
