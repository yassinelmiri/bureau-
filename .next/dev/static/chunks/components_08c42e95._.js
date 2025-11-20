(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/workspace-floor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkspaceFloor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/workspace-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function WorkspaceFloor() {
    _s();
    const { desks, rooms } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    // Calculate total space needed
    const maxX = Math.max(...desks.map((d)=>d.position.x), ...rooms.map((r)=>r.position.x)) + 3;
    const maxY = Math.max(...desks.map((d)=>d.position.y), ...rooms.map((r)=>r.position.y)) + 3;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    maxX / 2,
                    -0.05,
                    maxY / 2
                ],
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            maxX,
                            maxY
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/workspace-floor.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#ffffff",
                        roughness: 0.8,
                        metalness: 0.1
                    }, void 0, false, {
                        fileName: "[project]/components/workspace-floor.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace-floor.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.1,
                    1.5,
                    maxY / 2
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.2,
                            3,
                            maxY
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/workspace-floor.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#e8e8e8"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace-floor.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace-floor.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    maxX / 2,
                    1.5,
                    -0.1
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            maxX,
                            3,
                            0.2
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/workspace-floor.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#e8e8e8"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace-floor.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace-floor.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    maxX + 0.1,
                    1.5,
                    maxY / 2
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.2,
                            3,
                            maxY
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/workspace-floor.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#e8e8e8"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace-floor.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace-floor.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    maxX / 2,
                    1.5,
                    maxY + 0.1
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            maxX,
                            3,
                            0.2
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/workspace-floor.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#e8e8e8"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace-floor.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace-floor.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(WorkspaceFloor, "KaK9Wo5PA4NSTSXqZPttgXU0aOo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c = WorkspaceFloor;
var _c;
__turbopack_context__.k.register(_c, "WorkspaceFloor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/room-model.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/workspace-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RoomModel({ room }) {
    _s();
    const { selectedRoomId, setSelectedRoomId, draggingRoomId, setDraggingRoomId, updateRoomPosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isSelected = selectedRoomId === room.id;
    const isDragging = draggingRoomId === room.id;
    const getRoomColor = (type)=>{
        switch(type){
            case "kitchen":
                return "#fff0e6";
            case "meeting":
                return "#e6f0ff";
            case "restroom":
                return "#f0f0f0";
            default:
                return "#f0f0f0";
        }
    };
    const getRoomAccent = (type)=>{
        switch(type){
            case "kitchen":
                return "#ff9933";
            case "meeting":
                return "#0055ff";
            case "restroom":
                return "#666666";
            default:
                return "#0055ff";
        }
    };
    const handlePointerDown = (e)=>{
        e.stopPropagation();
        setDraggingRoomId(room.id);
        setSelectedRoomId(room.id);
    };
    const handlePointerMove = (e)=>{
        if (isDragging && meshRef.current) {
            const worldPos = e.point;
            updateRoomPosition(room.id, {
                x: Math.round(worldPos.x * 2) / 2,
                y: Math.round(worldPos.z * 2) / 2
            });
        }
    };
    const handlePointerUp = ()=>{
        setDraggingRoomId(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            room.position.x,
            0,
            room.position.y
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: meshRef,
                position: [
                    0,
                    0.01,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                onClick: (e)=>{
                    e.stopPropagation();
                    setSelectedRoomId(isSelected ? null : room.id);
                },
                onPointerDown: handlePointerDown,
                onPointerMove: handlePointerMove,
                onPointerUp: handlePointerUp,
                onPointerLeave: handlePointerUp,
                onPointerEnter: ()=>setHovered(true),
                onPointerLeave: ()=>setHovered(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            2.5,
                            0.02,
                            2.5
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/room-model.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: isDragging ? "#ff9500" : isSelected ? getRoomAccent(room.type) : hovered ? "#eeeeee" : getRoomColor(room.type),
                        metalness: 0.05,
                        roughness: 0.9
                    }, void 0, false, {
                        fileName: "[project]/components/room-model.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/room-model.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            [
                [
                    -1.25,
                    1,
                    0
                ],
                [
                    1.25,
                    1,
                    0
                ],
                [
                    0,
                    1,
                    -1.25
                ],
                [
                    0,
                    1,
                    1.25
                ]
            ].map((pos, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: pos,
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: i < 2 ? [
                                0.1,
                                2,
                                2.5
                            ] : [
                                2.5,
                                2,
                                0.1
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/room-model.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#cccccc",
                            metalness: 0.05
                        }, void 0, false, {
                            fileName: "[project]/components/room-model.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/room-model.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    2.1,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.2,
                            32,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/room-model.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: getRoomAccent(room.type),
                        emissive: getRoomAccent(room.type),
                        emissiveIntensity: 0.3
                    }, void 0, false, {
                        fileName: "[project]/components/room-model.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/room-model.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/room-model.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(RoomModel, "AUNcrAyLl+B6OIJnU+aarUzpj0U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c = RoomModel;
var _c;
__turbopack_context__.k.register(_c, "RoomModel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/room-objects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomObjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/workspace-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$room$2d$model$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/room-model.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function RoomObjects() {
    _s();
    const { rooms } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: rooms.map((room)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$room$2d$model$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                room: room
            }, room.id, false, {
                fileName: "[project]/components/room-objects.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
_s(RoomObjects, "tXggaDxkYeGYmco8iYN3JQ/0OJs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c = RoomObjects;
var _c;
__turbopack_context__.k.register(_c, "RoomObjects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/desk-model.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeskModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/workspace-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/language-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DeskModel({ desk }) {
    _s();
    const { employees, selectedDeskId, setSelectedDeskId, draggingDeskId, setDraggingDeskId, updateDeskPosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const employee = employees.find((e)=>e.deskId === desk.id);
    const isSelected = selectedDeskId === desk.id;
    const isDragging = draggingDeskId === desk.id;
    const getStatusColor = (status)=>{
        switch(status){
            case "available":
                return "#0055ff";
            case "occupied":
                return "#ff6b6b";
            case "out":
                return "#999999";
            default:
                return "#0055ff";
        }
    };
    const statusColor = employee ? getStatusColor(employee.status) : "#999999";
    const handlePointerDown = (e)=>{
        e.stopPropagation();
        setDraggingDeskId(desk.id);
        setSelectedDeskId(desk.id);
    };
    const handlePointerMove = (e)=>{
        if (isDragging && meshRef.current) {
            const worldPos = e.point;
            updateDeskPosition(desk.id, {
                x: Math.round(worldPos.x * 2) / 2,
                y: Math.round(worldPos.z * 2) / 2
            });
        }
    };
    const handlePointerUp = ()=>{
        setDraggingDeskId(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            desk.position.x,
            0,
            desk.position.y
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: meshRef,
                position: [
                    0,
                    0.75,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                onClick: (e)=>{
                    e.stopPropagation();
                    setSelectedDeskId(isSelected ? null : desk.id);
                },
                onPointerDown: handlePointerDown,
                onPointerMove: handlePointerMove,
                onPointerUp: handlePointerUp,
                onPointerLeave: handlePointerUp,
                onPointerEnter: ()=>setHovered(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            desk.width,
                            0.05,
                            desk.depth
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/desk-model.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: isDragging ? "#ff9500" : isSelected ? "#0055ff" : hovered ? "#e8e8ff" : "#f0f0f0",
                        metalness: 0.1,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/desk-model.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/desk-model.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            [
                [
                    -desk.width / 2 + 0.2,
                    0.3,
                    -desk.depth / 2 + 0.2
                ],
                [
                    -desk.width / 2 + 0.2,
                    0.3,
                    desk.depth / 2 - 0.2
                ],
                [
                    desk.width / 2 - 0.2,
                    0.3,
                    -desk.depth / 2 + 0.2
                ],
                [
                    desk.width / 2 - 0.2,
                    0.3,
                    desk.depth / 2 - 0.2
                ]
            ].map((pos, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: pos,
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                0.08,
                                0.6,
                                0.08
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/desk-model.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#333333"
                        }, void 0, false, {
                            fileName: "[project]/components/desk-model.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/desk-model.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)),
            employee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    1.2,
                    -desk.depth / 2 - 0.3
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            desk.width - 0.2,
                            1.2,
                            0.1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/desk-model.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#1a1a1a",
                        metalness: 0.6,
                        roughness: 0.2
                    }, void 0, false, {
                        fileName: "[project]/components/desk-model.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/desk-model.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    desk.width / 2 + 0.2,
                    0.85,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.15,
                            0.15,
                            0.05,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/desk-model.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: statusColor,
                        emissive: statusColor,
                        emissiveIntensity: hovered || isSelected ? 1 : 0.5
                    }, void 0, false, {
                        fileName: "[project]/components/desk-model.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/desk-model.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            employee && employee.status === "occupied" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    desk.width / 2 + 0.2,
                    0.85,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.2,
                            0.2,
                            0.06,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/desk-model.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#ff6b6b",
                        emissive: "#ff6b6b",
                        emissiveIntensity: 0.3,
                        transparent: true,
                        opacity: 0.3
                    }, void 0, false, {
                        fileName: "[project]/components/desk-model.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/desk-model.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this),
            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.76,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            desk.width + 0.2,
                            0.02,
                            desk.depth + 0.2
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/desk-model.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: isDragging ? "#ff9500" : "#0055ff",
                        emissive: isDragging ? "#ff9500" : "#0055ff",
                        emissiveIntensity: 1
                    }, void 0, false, {
                        fileName: "[project]/components/desk-model.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/desk-model.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/desk-model.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(DeskModel, "Ml8vmW6OWcgp6d86cPfTJiKyVc4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = DeskModel;
var _c;
__turbopack_context__.k.register(_c, "DeskModel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/desk-objects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeskObjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/workspace-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$desk$2d$model$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/desk-model.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function DeskObjects() {
    _s();
    const { desks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: desks.map((desk)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$desk$2d$model$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                desk: desk
            }, desk.id, false, {
                fileName: "[project]/components/desk-objects.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
_s(DeskObjects, "97bbaqtgBfOUIXYlbCt0Zl/B/yU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c = DeskObjects;
var _c;
__turbopack_context__.k.register(_c, "DeskObjects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/workspace-canvas-3d.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkspaceCanvas3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2d$floor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/workspace-floor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$room$2d$objects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/room-objects.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$desk$2d$objects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/desk-objects.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function WorkspaceCanvas3D() {
    _s();
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkspaceCanvas3D.useEffect": ()=>{
            if (cameraRef.current) {
                cameraRef.current.position.set(10, 8, 10);
                cameraRef.current.lookAt(6, 0, 6);
            }
        }
    }["WorkspaceCanvas3D.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        camera: {
            position: [
                10,
                8,
                10
            ],
            fov: 50,
            far: 1000
        },
        className: "w-full h-full",
        style: {
            background: "#ffffff"
        },
        gl: {
            antialias: true,
            alpha: true
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: "studio"
            }, void 0, false, {
                fileName: "[project]/components/workspace-canvas-3d.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.9
            }, void 0, false, {
                fileName: "[project]/components/workspace-canvas-3d.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    10,
                    15,
                    10
                ],
                intensity: 0.8,
                castShadow: true
            }, void 0, false, {
                fileName: "[project]/components/workspace-canvas-3d.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    -10,
                    10,
                    -10
                ],
                intensity: 0.4
            }, void 0, false, {
                fileName: "[project]/components/workspace-canvas-3d.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2d$floor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/workspace-canvas-3d.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$room$2d$objects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/workspace-canvas-3d.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$desk$2d$objects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/workspace-canvas-3d.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                autoRotate: false,
                enableZoom: true,
                enablePan: true,
                minDistance: 5,
                maxDistance: 50,
                makeDefault: true
            }, void 0, false, {
                fileName: "[project]/components/workspace-canvas-3d.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/workspace-canvas-3d.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(WorkspaceCanvas3D, "HXv3wxQbioe7vzfntxg8c7OL2kw=");
_c = WorkspaceCanvas3D;
var _c;
__turbopack_context__.k.register(_c, "WorkspaceCanvas3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/workspace-canvas-3d.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/workspace-canvas-3d.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_08c42e95._.js.map