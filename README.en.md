# Node CSV App

**English** | [中文](README.md)

A Node.js command-line application for writing contact information to a CSV file.

## Features

- Interactive command-line input for contact information (name, phone, email)
- Save contact data to CSV file
- Support for adding multiple contacts continuously
- Includes both basic and advanced implementations

## Installation

```bash
npm install
```

## Usage

### Basic Version (index.js)

Implemented using Node.js built-in `readline` module:

```bash
node index.js
```

### Advanced Version (index.advance.js)

Implemented using `prompt` and `csv-writer` libraries, with email validation and timestamp recording:

```bash
node index.advance.js
```

## File Structure

| File | Description |
|------|-------------|
| `index.js` | Basic version using native readline module |
| `index.advance.js` | Advanced version using prompt and csv-writer libraries |
| `contact.csv` | CSV file storing contact data |
| `package.json` | Project configuration and dependencies |

## Dependencies

- [csv-writer](https://www.npmjs.com/package/csv-writer) - CSV file writing library
- [prompt](https://www.npmjs.com/package/prompt) - Command-line interactive prompt library

## CSV Format

The generated CSV file contains the following fields:

- **Name** - Contact name
- **Number** - Phone number
- **Email** - Email address (validated in advanced version)
- **Timestamp** - Record timestamp (advanced version only)

## Example

```
$ node index.advance.js
prompt: Enter name:  Mike
prompt: Enter number:  13800138000
prompt: Enter email:  mike@example.com
Mike Saved
prompt: Do you want to continue? (y/n): n
```

## License

ISC
