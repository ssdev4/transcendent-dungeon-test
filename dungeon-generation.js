const canvas = document.getElementById('dungeonCanvas');
        const ctx = canvas.getContext('2d');
        const gridSize = 10; // Size of each grid cell
        const width = Math.floor(canvas.width / gridSize);
        const height = Math.floor(canvas.height / gridSize);
        const minRoomSize = 5;
        const maxRoomSize = 8;
        const maxRooms = 100;

        function initializeDungeon() {
            const dungeon = [];
            for (let i = 0; i < height; i++) {
                dungeon[i] = [];
                for (let j = 0; j < width; j++) {
                    dungeon[i][j] = 1; // Initialize all cells as walls
                }
            }
            return dungeon;
        }

        function generateDungeon() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            let dungeon = initializeDungeon();
            const rooms = [];

            for (let i = 0; i < maxRooms; i++) {
                const roomWidth = Math.floor(Math.random() * (maxRoomSize - minRoomSize + 1)) + minRoomSize;
                const roomHeight = Math.floor(Math.random() * (maxRoomSize - minRoomSize + 1)) + minRoomSize;
                const x = Math.floor(Math.random() * (width - roomWidth));
                const y = Math.floor(Math.random() * (height - roomHeight));

                if (isRoomValid(rooms, x, y, roomWidth, roomHeight)) {
                    createRoom(dungeon, x, y, roomWidth, roomHeight);
                    rooms.push({ x, y, width: roomWidth, height: roomHeight });
                }
            }

            for (let i = 1; i < rooms.length; i++) {
                const startX = Math.floor(rooms[i].x + rooms[i].width / 2);
                const startY = Math.floor(rooms[i].y + rooms[i].height / 2);
                const endX = Math.floor(rooms[i - 1].x + rooms[i - 1].width / 2);
                const endY = Math.floor(rooms[i - 1].y + rooms[i - 1].height / 2);
                createCorridor(dungeon, startX, startY, endX, endY);
            }

            drawDungeon(dungeon);
        }

        function isRoomValid(rooms, x, y, width, height) {
            for (const room of rooms) {
                if (
                    x < room.x + room.width + 2 &&
                    x + width + 2 > room.x &&
                    y < room.y + room.height + 2 &&
                    y + height + 2 > room.y
                ) {
                    return false;
                }
            }
            return true;
        }

        function createRoom(dungeon, x, y, width, height) {
            for (let i = x; i < x + width; i++) {
                for (let j = y; j < y + height; j++) {
                    dungeon[j][i] = 0;
                }
            }
        }

        function createCorridor(dungeon, startX, startY, endX, endY) {
            let x = startX;
            let y = startY;

            while (x !== endX) {
                dungeon[y][x] = 0;
                if (x < endX) {
                    x++;
                } else {
                    x--;
                }
            }

            while (y !== endY) {
                dungeon[y][x] = 0;
                if (y < endY) {
                    y++;
                } else {
                    y--;
                }
            }
        }

        function drawDungeon(dungeon) {
            for (let i = 0; i < height; i++) {
                for (let j = 0; j < width; j++) {
                    if (dungeon[i][j] === 1) {
                        // Draw walls
                        console.log(ctx)

                        // ctx.shadowColor = rgb(100, 75.3, 79.6)
                        ctx.fillStyle = 'black'; // Set structure color to black
                        ctx.fillRect(j * gridSize, i * gridSize, gridSize, gridSize);
                    }
                }
            }
        }

        // Generate an initial dungeon on page load
        generateDungeon();
