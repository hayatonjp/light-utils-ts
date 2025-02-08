## 📦 Installation
You can install light-utils-ts via npm:
```
npm install @hayatonjp/light-utils-ts
```
Or with Yarn:
```
yarn add @hayatonjp/light-utils-ts
```

## 🚀 Usage
Importing a function
```
import { chunk } from "@hayatonjp/light-utils-ts";

const array = [1, 2, 3, 4, 5, 6];
const result = chunk(array, 2);
console.log(result); // [[1, 2], [3, 4], [5, 6]]
```

## 📚 Functions
Here are some useful functions available in this package:

### 🛠 **Array Utilities**
| Function | Description |
|----------|------------|
| `chunk<T>(arr: T[], size: number): T[][]` | Splits an array into subarrays of a given size. |
| `removeDuplicates<T>(arr: T[]): T[]` | Removes duplicate values from an array. |

### 🔡 **String Utilities**
| Function | Description |
|----------|------------|
| `toCamelCase(str: string): string` | Converts a string to camelCase. |
| `toKebabCase(str: string): string` | Converts a string to kebab-case. |
| `toSnakeCase(str: string): string` | Converts a string to snake_case. |

### 📅 **Date Utilities**
| Function | Description |
|----------|------------|
| `getJapaneseDay(date?: Date): string` | Returns the Japanese day of the week (e.g., "日曜日"). |

## 📝 Contributing
Want to contribute? Feel free to open an issue or submit a pull request!
1. Fork the repository
2. Clone your fork
```
git clone https://github.com/hayatonjp/light-utils-ts.git
cd light-utils-ts
```
3. Install dependencies
```
npm install
```
4. Run tests
```
npm test
```

## 📄 License
This project is licensed under the [MIT License](LICENSE).

## 🔗 Links
npm: [@hayatonjp/light-utils-ts](https://www.npmjs.com/package/@hayatonjp/light-utils-ts)

## ✨ Summary
✅ Provides lightweight utility functions for TypeScript<br>
✅ Simple installation via npm or Yarn<br>
✅ MIT Licensed & Open Source<br>

#### 🚀 Ready to use? Install now and simplify your development! 🚀
