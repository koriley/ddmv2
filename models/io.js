let fs = require("fs");

module.exports = {

  readAFile: function (filepath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filepath, 'utf-8', function (err, data) {
        if (err) {
          reject("An error ocurred reading the file :" + err.message);
          return;
        } else {
          resolve(data);
        }
      });
    });
  },

  writeFile: function (filepath, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(filepath, data, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("File Written");
        }
      });
    })
  },

  getDirContents: function (dir) {
      return new Promise((resolve, reject) => {
        var files = {};
        var fileNames = [];
        try {
          fs.readdirSync(dir).forEach((fileName) => {
            fileNames.push({
              "name": fileName
            })
            files = {
              "files": fileNames
            }

          });
          resolve(files);
        } catch (error) {
          reject(error);
        }

      })
    },

  checkFileExist: function (path) {
      return new Promise((resolve, reject) => {
        if (!path) {
          reject("Path is invalid " + path)
        }
        try {
          fs.access(path, fs.F_OK, (err) => {
            if (err) {
              resolve("false");
            }
            resolve("true");
          });
        } catch (error) {
          reject("error");
        }
      });
    },

  checkDirExist: function (dir) {
      return new Promise((resolve, reject) => {
        try {
          if (fs.existsSync(dir)) {
            resolve("true");
          } else {
            resolve("false");
          }

        } catch (error) {
          reject(error);
        }
      });
    },

  createDir: function (dir) {
      return new Promise((resolve, reject) => {
        try {
          fs.mkdirSync(dir);
          resolve("done");
        } catch (error) {
          reject(error);
        }
      });
    },

  removeSpace: function (string) {
      return new Promise((resolve, reject) => {
        try {
          var cleanString = string.replace(/\s/g, spaceChar);
          resolve(cleanString);
        } catch (error) {
          reject(error);
        }
      })


    },

  addSpace: function (string) {

    return new Promise((resolve, reject) => {
      try {
        var addSpace = new RegExp(spaceChar, "g")
        var cleanString = string.replace(addSpace, /\s/);
        resolve(cleanString);
      } catch (error) {
        reject(error);
      }
    })
  }
}
