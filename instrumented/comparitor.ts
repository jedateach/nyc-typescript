function cov_1qahgqgynf() {
  var path = "/Users/jeremy/development/nyc-typescript/src/comparitor.ts";
  var hash = "cb63d407a51a2f1191248e83f7f5751ab00ebcf9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/jeremy/development/nyc-typescript/src/comparitor.ts",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 12
        },
        end: {
          line: 2,
          column: 17
        }
      },
      "1": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 5,
          column: 3
        }
      },
      "2": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 53
        }
      },
      "3": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "comparator",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 34
          }
        },
        loc: {
          start: {
            line: 1,
            column: 50
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cb63d407a51a2f1191248e83f7f5751ab00ebcf9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1qahgqgynf = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1qahgqgynf();
export default function comparator(first, second) {
  cov_1qahgqgynf().f[0]++;
  const f = (cov_1qahgqgynf().s[0]++, false);
  cov_1qahgqgynf().s[1]++;

  while (f) {
    cov_1qahgqgynf().s[2]++;
    console.log("this code is not covered in tests");
  }

  cov_1qahgqgynf().s[3]++;
  return first === second;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhcml0b3IudHMiXSwibmFtZXMiOlsiY29tcGFyYXRvciIsImZpcnN0Iiwic2Vjb25kIiwiZiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQWUsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkJDLE1BQTNCLEVBQW1DO0FBQUE7QUFDaEQsUUFBTUMsQ0FBQyw2QkFBRyxLQUFILENBQVA7QUFEZ0Q7O0FBRWhELFNBQU9BLENBQVAsRUFBVTtBQUFBO0FBQ1JDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1DQUFaO0FBQ0Q7O0FBSitDO0FBS2hELFNBQU9KLEtBQUssS0FBS0MsTUFBakI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmF0b3IoZmlyc3QsIHNlY29uZCkge1xuICBjb25zdCBmID0gZmFsc2U7XG4gIHdoaWxlIChmKSB7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGNvZGUgaXMgbm90IGNvdmVyZWQgaW4gdGVzdHNcIik7XG4gIH1cbiAgcmV0dXJuIGZpcnN0ID09PSBzZWNvbmQ7XG59XG4iXX0=