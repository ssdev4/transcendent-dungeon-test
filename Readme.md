# Procedural Dungeon Generation

This web application generates procedural dungeons with interconnected pathways. The generated dungeons are similar to mazes, where all the pathways are connected without any isolated areas.

## How to Use

1. Clone or download this repository to your local machine.

2. Open the `index.html` file in a web browser.

3. Click the "Generate Dungeon" button to generate a new dungeon.

4. Enjoy exploring the generated dungeon.

## Customization

You can customize the application by adjusting the following parameters in the JavaScript code in the `index.html` file:

- `gridSize`: Change the size of each grid cell.

- `width` and `height`: Modify the canvas dimensions to change the size of the generated dungeon.

- You can adjust the algorithm for generating the dungeon by modifying the JavaScript code to use different generation techniques.

## Additional Notes

- The application uses the randomized Prim's algorithm to create the dungeon pattern.

- The generated dungeons do not have explicit borders around the canvas but are enclosed within the canvas boundaries.

## Prerequisites

- Visual Studio Code, or any code editor of your choice.

## Getting Started

### Clone the repository to your local machine:
    git clone https://github.com/ssdev4/transcendent-dungeon-test.git

### Install dependanies on your local machine:
    run the command ```npm install```

### Build the Application
    to build the application run the command ```npx http-server```
