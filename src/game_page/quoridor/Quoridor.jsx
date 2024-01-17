
import React, { useState, useEffect, Suspense } from "react";
import { useGLTF, CameraControls, Environment } from "@react-three/drei";
import { a } from '@react-spring/three';
import { Canvas } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import * as THREE from 'three';
import Confetti from "react-confetti";

import quoridorScene from './quoridor.glb';
import Piece from "./Piece";
import Grid from "./Grid";
import Static from "./Static";
import Wall from "./Wall";
import Line from "./Line";
import { Navbar, Notification, ColorPalette, GameMenu, Loader, useBoardTransform } from "../index";
import styles from "../../styles/styles";
import { gameMenu } from "../../constants";
import { simpleInOut } from "../../styles/motion";

const Quoridor = (props) => {
    const { nodes, materials } = useGLTF(quoridorScene);
    const [boardScale, boardPosition, boardRotation] = useBoardTransform();

    // Color states
    const [selectedPalette, setSelectedPalette] = useState(1);
    const palettes = [
        {
            preset: "dawn",
            from: "from-purple-800",
            to: "to-violet-300",
            colors: [new THREE.Color( "#0c0a09" ), new THREE.Color( "#581c87" ), new THREE.Color( "#a78bfa" )],
        },
        {
            preset: "apartment",
            from: "from-red-800",
            to: "to-amber-300",
            colors: [new THREE.Color( "#0c0a09" ), new THREE.Color( "#450a0a" ), new THREE.Color( "#a16207" )],
        },
        {
            preset: "park",
            from: "from-emerald-800",
            to: "to-emerald-300",
            colors: [new THREE.Color( "#0c0a09" ), new THREE.Color( "#022c22" ), new THREE.Color( "#047857" )],
        },
    ];
    materials.P1.color = new THREE.Color( "#991b1b" );
    materials.Translucent_P1.color = new THREE.Color( "#991b1b" );
    materials.P2.color = new THREE.Color( "#ca8a04" );
    materials.Translucent_P2.color = new THREE.Color( "#ca8a04" );
    materials.Grid.color = palettes[selectedPalette].colors[0];
    materials.Table.color = palettes[selectedPalette].colors[1];
    materials.Wall.color = palettes[selectedPalette].colors[2];
    materials.Translucent_Wall.color = palettes[selectedPalette].colors[2];
    materials.Hover.color = new THREE.Color( "#d6d3d1" );

    // Game pieces/grids/lines/walls information
    const initialPiecesInfo = [
        {
            grid: 76,
            geometry: nodes.Player_1.geometry,
            material: materials.P1,
            position: [0, 0, 0.224],
            rotation: [-Math.PI / 2, 0, 0],
            scale: 0.005,
        },
        {
            grid: 4,
            geometry: nodes.Player_2.geometry,
            material: materials.P2,
            position: [0, 0, -0.224],
            rotation: [-Math.PI / 2, 0, 0],
            scale: 0.005,
        },
    ];
    const initialGridsInfo = [ // walls: [up, down, left, right]
        // Row 1
        { available: false, position: [-0.224, 0, -0.224], walls: [true, false, true, false] },
        { available: false, position: [-0.168, 0, -0.224], walls: [true, false, false, false] },
        { available: false, position: [-0.112, 0, -0.224], walls: [true, false, false, false] },
        { available: false, position: [-0.056, 0, -0.224], walls: [true, false, false, false] },
        { available: false, position: [0, 0, -0.224], walls: [true, false, false, false] },
        { available: false, position: [0.056, 0, -0.224], walls: [true, false, false, false] },
        { available: false, position: [0.112, 0, -0.224], walls: [true, false, false, false] },
        { available: false, position: [0.168, 0, -0.224], walls: [true, false, false, false] },
        { available: false, position: [0.224, 0, -0.224], walls: [true, false, false, true] },
        // Row 2
        { available: false, position: [-0.224, 0, -0.168], walls: [false, false, true, false] },
        { available: false, position: [-0.168, 0, -0.168], walls: [false, false, false, false] },
        { available: false, position: [-0.112, 0, -0.168], walls: [false, false, false, false] },
        { available: false, position: [-0.056, 0, -0.168], walls: [false, false, false, false] },
        { available: false, position: [0, 0, -0.168], walls: [false, false, false, false] },
        { available: false, position: [0.056, 0, -0.168], walls: [false, false, false, false] },
        { available: false, position: [0.112, 0, -0.168], walls: [false, false, false, false] },
        { available: false, position: [0.168, 0, -0.168], walls: [false, false, false, false] },
        { available: false, position: [0.224, 0, -0.168], walls: [false, false, false, true] },
        // Row 3
        { available: false, position: [-0.224, 0, -0.112], walls: [false, false, true, false] },
        { available: false, position: [-0.168, 0, -0.112], walls: [false, false, false, false] },
        { available: false, position: [-0.112, 0, -0.112], walls: [false, false, false, false] },
        { available: false, position: [-0.056, 0, -0.112], walls: [false, false, false, false] },
        { available: false, position: [0, 0, -0.112], walls: [false, false, false, false] },
        { available: false, position: [0.056, 0, -0.112], walls: [false, false, false, false] },
        { available: false, position: [0.112, 0, -0.112], walls: [false, false, false, false] },
        { available: false, position: [0.168, 0, -0.112], walls: [false, false, false, false] },
        { available: false, position: [0.224, 0, -0.112], walls: [false, false, false, true] },
        // Row 4
        { available: false, position: [-0.224, 0, -0.056], walls: [false, false, true, false] },
        { available: false, position: [-0.168, 0, -0.056], walls: [false, false, false, false] },
        { available: false, position: [-0.112, 0, -0.056], walls: [false, false, false, false] },
        { available: false, position: [-0.056, 0, -0.056], walls: [false, false, false, false] },
        { available: false, position: [0, 0, -0.056], walls: [false, false, false, false] },
        { available: false, position: [0.056, 0, -0.056], walls: [false, false, false, false] },
        { available: false, position: [0.112, 0, -0.056], walls: [false, false, false, false] },
        { available: false, position: [0.168, 0, -0.056], walls: [false, false, false, false] },
        { available: false, position: [0.224, 0, -0.056], walls: [false, false, false, true] },
        // Row 5
        { available: false, position: [-0.224, 0, 0], walls: [false, false, true, false] },
        { available: false, position: [-0.168, 0, 0], walls: [false, false, false, false] },
        { available: false, position: [-0.112, 0, 0], walls: [false, false, false, false] },
        { available: false, position: [-0.056, 0, 0], walls: [false, false, false, false] },
        { available: false, position: [0, 0, 0], walls: [false, false, false, false] },
        { available: false, position: [0.056, 0, 0], walls: [false, false, false, false] },
        { available: false, position: [0.112, 0, 0], walls: [false, false, false, false] },
        { available: false, position: [0.168, 0, 0], walls: [false, false, false, false] },
        { available: false, position: [0.224, 0, 0], walls: [false, false, false, true] },
        // Row 6
        { available: false, position: [-0.224, 0, 0.056], walls: [false, false, true, false] },
        { available: false, position: [-0.168, 0, 0.056], walls: [false, false, false, false] },
        { available: false, position: [-0.112, 0, 0.056], walls: [false, false, false, false] },
        { available: false, position: [-0.056, 0, 0.056], walls: [false, false, false, false] },
        { available: false, position: [0, 0, 0.056], walls: [false, false, false, false] },
        { available: false, position: [0.056, 0, 0.056], walls: [false, false, false, false] },
        { available: false, position: [0.112, 0, 0.056], walls: [false, false, false, false] },
        { available: false, position: [0.168, 0, 0.056], walls: [false, false, false, false] },
        { available: false, position: [0.224, 0, 0.056], walls: [false, false, false, true] },
        // Row 7
        { available: false, position: [-0.224, 0, 0.112], walls: [false, false, true, false] },
        { available: false, position: [-0.168, 0, 0.112], walls: [false, false, false, false] },
        { available: false, position: [-0.112, 0, 0.112], walls: [false, false, false, false] },
        { available: false, position: [-0.056, 0, 0.112], walls: [false, false, false, false] },
        { available: false, position: [0, 0, 0.112], walls: [false, false, false, false] },
        { available: false, position: [0.056, 0, 0.112], walls: [false, false, false, false] },
        { available: false, position: [0.112, 0, 0.112], walls: [false, false, false, false] },
        { available: false, position: [0.168, 0, 0.112], walls: [false, false, false, false] },
        { available: false, position: [0.224, 0, 0.112], walls: [false, false, false, true] },
        // Row 8
        { available: false, position: [-0.224, 0, 0.168], walls: [false, false, true, false] },
        { available: false, position: [-0.168, 0, 0.168], walls: [false, false, false, false] },
        { available: false, position: [-0.112, 0, 0.168], walls: [false, false, false, false] },
        { available: false, position: [-0.056, 0, 0.168], walls: [false, false, false, false] },
        { available: false, position: [0, 0, 0.168], walls: [false, false, false, false] },
        { available: false, position: [0.056, 0, 0.168], walls: [false, false, false, false] },
        { available: false, position: [0.112, 0, 0.168], walls: [false, false, false, false] },
        { available: false, position: [0.168, 0, 0.168], walls: [false, false, false, false] },
        { available: false, position: [0.224, 0, 0.168], walls: [false, false, false, true] },
        // Row 9
        { available: false, position: [-0.224, 0, 0.224], walls: [false, true, true, false] },
        { available: false, position: [-0.168, 0, 0.224], walls: [false, true, false, false] },
        { available: false, position: [-0.112, 0, 0.224], walls: [false, true, false, false] },
        { available: false, position: [-0.056, 0, 0.224], walls: [false, true, false, false] },
        { available: false, position: [0, 0, 0.224], walls: [false, true, false, false] },
        { available: false, position: [0.056, 0, 0.224], walls: [false, true, false, false] },
        { available: false, position: [0.112, 0, 0.224], walls: [false, true, false, false] },
        { available: false, position: [0.168, 0, 0.224], walls: [false, true, false, false] },
        { available: false, position: [0.224, 0, 0.224], walls: [false, true, false, true] },
    ];
    const initialLinesInfo = [
        // Vertical col 1
        { available: true, position: [-0.196, 0, -0.196], rotation: [0, 0, 0], hoverPosition: [-0.196, 0, -0.2085], isEdge: true, },
        { available: true, position: [-0.196, 0, -0.14], rotation: [0, 0, 0], hoverPosition: [-0.196, 0, -0.14], isEdge: false, },
        { available: true, position: [-0.196, 0, -0.084], rotation: [0, 0, 0], hoverPosition: [-0.196, 0, -0.084], isEdge: false, },
        { available: true, position: [-0.196, 0, -0.028], rotation: [0, 0, 0], hoverPosition: [-0.196, 0, -0.028], isEdge: false, },
        { available: true, position: [-0.196, 0, 0.028], rotation: [0, 0, 0], hoverPosition: [-0.196, 0, 0.028], isEdge: false, },
        { available: true, position: [-0.196, 0, 0.084], rotation: [0, 0, 0], hoverPosition: [-0.196, 0, 0.084], isEdge: false, },
        { available: true, position: [-0.196, 0, 0.14], rotation: [0, 0, 0], hoverPosition: [-0.196, 0, 0.14], isEdge: false, },
        { available: true, position: [-0.196, 0, 0.196], rotation: [0, 0, 0], hoverPosition: [-0.196, 0, 0.2085], isEdge: true, },
        // Vertical col 2
        { available: true, position: [-0.14, 0, -0.196], rotation: [0, 0, 0], hoverPosition: [-0.14, 0, -0.2085], isEdge: true, },
        { available: true, position: [-0.14, 0, -0.14], rotation: [0, 0, 0], hoverPosition: [-0.14, 0, -0.14], isEdge: false, },
        { available: true, position: [-0.14, 0, -0.084], rotation: [0, 0, 0], hoverPosition: [-0.14, 0, -0.084], isEdge: false, },
        { available: true, position: [-0.14, 0, -0.028], rotation: [0, 0, 0], hoverPosition: [-0.14, 0, -0.028], isEdge: false, },
        { available: true, position: [-0.14, 0, 0.028], rotation: [0, 0, 0], hoverPosition: [-0.14, 0, 0.028], isEdge: false, },
        { available: true, position: [-0.14, 0, 0.084], rotation: [0, 0, 0], hoverPosition: [-0.14, 0, 0.084], isEdge: false, },
        { available: true, position: [-0.14, 0, 0.14], rotation: [0, 0, 0], hoverPosition: [-0.14, 0, 0.14], isEdge: false, },
        { available: true, position: [-0.14, 0, 0.196], rotation: [0, 0, 0], hoverPosition: [-0.14, 0, 0.2085], isEdge: true, },
        // Vertical col 3
        { available: true, position: [-0.084, 0, -0.196], rotation: [0, 0, 0], hoverPosition: [-0.084, 0, -0.2085], isEdge: true, },
        { available: true, position: [-0.084, 0, -0.14], rotation: [0, 0, 0], hoverPosition: [-0.084, 0, -0.14], isEdge: false, },
        { available: true, position: [-0.084, 0, -0.084], rotation: [0, 0, 0], hoverPosition: [-0.084, 0, -0.084], isEdge: false, },
        { available: true, position: [-0.084, 0, -0.028], rotation: [0, 0, 0], hoverPosition: [-0.084, 0, -0.028], isEdge: false, },
        { available: true, position: [-0.084, 0, 0.028], rotation: [0, 0, 0], hoverPosition: [-0.084, 0, 0.028], isEdge: false, },
        { available: true, position: [-0.084, 0, 0.084], rotation: [0, 0, 0], hoverPosition: [-0.084, 0, 0.084], isEdge: false, },
        { available: true, position: [-0.084, 0, 0.14], rotation: [0, 0, 0], hoverPosition: [-0.084, 0, 0.14], isEdge: false, },
        { available: true, position: [-0.084, 0, 0.196], rotation: [0, 0, 0], hoverPosition: [-0.084, 0, 0.2085], isEdge: true, },
        // Vertical col 4
        { available: true, position: [-0.028, 0, -0.196], rotation: [0, 0, 0], hoverPosition: [-0.028, 0, -0.2085], isEdge: true, },
        { available: true, position: [-0.028, 0, -0.14], rotation: [0, 0, 0], hoverPosition: [-0.028, 0, -0.14], isEdge: false, },
        { available: true, position: [-0.028, 0, -0.084], rotation: [0, 0, 0], hoverPosition: [-0.028, 0, -0.084], isEdge: false, },
        { available: true, position: [-0.028, 0, -0.028], rotation: [0, 0, 0], hoverPosition: [-0.028, 0, -0.028], isEdge: false, },
        { available: true, position: [-0.028, 0, 0.028], rotation: [0, 0, 0], hoverPosition: [-0.028, 0, 0.028], isEdge: false, },
        { available: true, position: [-0.028, 0, 0.084], rotation: [0, 0, 0], hoverPosition: [-0.028, 0, 0.084], isEdge: false, },
        { available: true, position: [-0.028, 0, 0.14], rotation: [0, 0, 0], hoverPosition: [-0.028, 0, 0.14], isEdge: false, },
        { available: true, position: [-0.028, 0, 0.196], rotation: [0, 0, 0], hoverPosition: [-0.028, 0, 0.2085], isEdge: true, },
        // Vertical col 5
        { available: true, position: [0.028, 0, -0.196], rotation: [0, 0, 0], hoverPosition: [0.028, 0, -0.2085], isEdge: true, },
        { available: true, position: [0.028, 0, -0.14], rotation: [0, 0, 0], hoverPosition: [0.028, 0, -0.14], isEdge: false, },
        { available: true, position: [0.028, 0, -0.084], rotation: [0, 0, 0], hoverPosition: [0.028, 0, -0.084], isEdge: false, },
        { available: true, position: [0.028, 0, -0.028], rotation: [0, 0, 0], hoverPosition: [0.028, 0, -0.028], isEdge: false, },
        { available: true, position: [0.028, 0, 0.028], rotation: [0, 0, 0], hoverPosition: [0.028, 0, 0.028], isEdge: false, },
        { available: true, position: [0.028, 0, 0.084], rotation: [0, 0, 0], hoverPosition: [0.028, 0, 0.084], isEdge: false, },
        { available: true, position: [0.028, 0, 0.14], rotation: [0, 0, 0], hoverPosition: [0.028, 0, 0.14], isEdge: false, },
        { available: true, position: [0.028, 0, 0.196], rotation: [0, 0, 0], hoverPosition: [0.028, 0, 0.2085], isEdge: true, },
        // Vertical col 6
        { available: true, position: [0.084, 0, -0.196], rotation: [0, 0, 0], hoverPosition: [0.084, 0, -0.2085], isEdge: true, },
        { available: true, position: [0.084, 0, -0.14], rotation: [0, 0, 0], hoverPosition: [0.084, 0, -0.14], isEdge: false, },
        { available: true, position: [0.084, 0, -0.084], rotation: [0, 0, 0], hoverPosition: [0.084, 0, -0.084], isEdge: false, },
        { available: true, position: [0.084, 0, -0.028], rotation: [0, 0, 0], hoverPosition: [0.084, 0, -0.028], isEdge: false, },
        { available: true, position: [0.084, 0, 0.028], rotation: [0, 0, 0], hoverPosition: [0.084, 0, 0.028], isEdge: false, },
        { available: true, position: [0.084, 0, 0.084], rotation: [0, 0, 0], hoverPosition: [0.084, 0, 0.084], isEdge: false, },
        { available: true, position: [0.084, 0, 0.14], rotation: [0, 0, 0], hoverPosition: [0.084, 0, 0.14], isEdge: false, },
        { available: true, position: [0.084, 0, 0.196], rotation: [0, 0, 0], hoverPosition: [0.084, 0, 0.2085], isEdge: true, },
        // Vertical col 7
        { available: true, position: [0.14, 0, -0.196], rotation: [0, 0, 0], hoverPosition: [0.14, 0, -0.2085], isEdge: true, },
        { available: true, position: [0.14, 0, -0.14], rotation: [0, 0, 0], hoverPosition: [0.14, 0, -0.14], isEdge: false, },
        { available: true, position: [0.14, 0, -0.084], rotation: [0, 0, 0], hoverPosition: [0.14, 0, -0.084], isEdge: false, },
        { available: true, position: [0.14, 0, -0.028], rotation: [0, 0, 0], hoverPosition: [0.14, 0, -0.028], isEdge: false, },
        { available: true, position: [0.14, 0, 0.028], rotation: [0, 0, 0], hoverPosition: [0.14, 0, 0.028], isEdge: false, },
        { available: true, position: [0.14, 0, 0.084], rotation: [0, 0, 0], hoverPosition: [0.14, 0, 0.084], isEdge: false, },
        { available: true, position: [0.14, 0, 0.14], rotation: [0, 0, 0], hoverPosition: [0.14, 0, 0.14], isEdge: false, },
        { available: true, position: [0.14, 0, 0.196], rotation: [0, 0, 0], hoverPosition: [0.14, 0, 0.2085], isEdge: true, },
        // Vertical col 8
        { available: true, position: [0.196, 0, -0.196], rotation: [0, 0, 0], hoverPosition: [0.196, 0, -0.2085], isEdge: true, },
        { available: true, position: [0.196, 0, -0.14], rotation: [0, 0, 0], hoverPosition: [0.196, 0, -0.14], isEdge: false, },
        { available: true, position: [0.196, 0, -0.084], rotation: [0, 0, 0], hoverPosition: [0.196, 0, -0.084], isEdge: false, },
        { available: true, position: [0.196, 0, -0.028], rotation: [0, 0, 0], hoverPosition: [0.196, 0, -0.028], isEdge: false, },
        { available: true, position: [0.196, 0, 0.028], rotation: [0, 0, 0], hoverPosition: [0.196, 0, 0.028], isEdge: false, },
        { available: true, position: [0.196, 0, 0.084], rotation: [0, 0, 0], hoverPosition: [0.196, 0, 0.084], isEdge: false, },
        { available: true, position: [0.196, 0, 0.14], rotation: [0, 0, 0], hoverPosition: [0.196, 0, 0.14], isEdge: false, },
        { available: true, position: [0.196, 0, 0.196], rotation: [0, 0, 0], hoverPosition: [0.196, 0, 0.2085], isEdge: true, },
        // Horizontal row 1
        { available: true, position: [-0.196, 0, -0.196], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.2085, 0, -0.196], isEdge: true, },
        { available: true, position: [-0.14, 0, -0.196], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.14, 0, -0.196], isEdge: false, },
        { available: true, position: [-0.084, 0, -0.196], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.084, 0, -0.196], isEdge: false, },
        { available: true, position: [-0.028, 0, -0.196], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.028, 0, -0.196], isEdge: false, },
        { available: true, position: [0.028, 0, -0.196], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.028, 0, -0.196], isEdge: false, },
        { available: true, position: [0.084, 0, -0.196], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.084, 0, -0.196], isEdge: false, },
        { available: true, position: [0.14, 0, -0.196], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.14, 0, -0.196], isEdge: false, },
        { available: true, position: [0.196, 0, -0.196], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.2085, 0, -0.196], isEdge: true, },
        // Horizontal row 2
        { available: true, position: [-0.196, 0, -0.14], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.2085, 0, -0.14], isEdge: true, },
        { available: true, position: [-0.14, 0, -0.14], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.14, 0, -0.14], isEdge: false, },
        { available: true, position: [-0.084, 0, -0.14], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.084, 0, -0.14], isEdge: false, },
        { available: true, position: [-0.028, 0, -0.14], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.028, 0, -0.14], isEdge: false, },
        { available: true, position: [0.028, 0, -0.14], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.028, 0, -0.14], isEdge: false, },
        { available: true, position: [0.084, 0, -0.14], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.084, 0, -0.14], isEdge: false, },
        { available: true, position: [0.14, 0, -0.14], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.14, 0, -0.14], isEdge: false, },
        { available: true, position: [0.196, 0, -0.14], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.2085, 0, -0.14], isEdge: true, },
        // Horizontal row 3
        { available: true, position: [-0.196, 0, -0.084], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.2085, 0, -0.084], isEdge: true, },
        { available: true, position: [-0.14, 0, -0.084], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.14, 0, -0.084], isEdge: false, },
        { available: true, position: [-0.084, 0, -0.084], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.084, 0, -0.084], isEdge: false, },
        { available: true, position: [-0.028, 0, -0.084], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.028, 0, -0.084], isEdge: false, },
        { available: true, position: [0.028, 0, -0.084], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.028, 0, -0.084], isEdge: false, },
        { available: true, position: [0.084, 0, -0.084], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.084, 0, -0.084], isEdge: false, },
        { available: true, position: [0.14, 0, -0.084], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.14, 0, -0.084], isEdge: false, },
        { available: true, position: [0.196, 0, -0.084], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.2085, 0, -0.084], isEdge: true, },
        // Horizontal row 4
        { available: true, position: [-0.196, 0, -0.028], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.2085, 0, -0.028], isEdge: true, },
        { available: true, position: [-0.14, 0, -0.028], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.14, 0, -0.028], isEdge: false, },
        { available: true, position: [-0.084, 0, -0.028], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.084, 0, -0.028], isEdge: false, },
        { available: true, position: [-0.028, 0, -0.028], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.028, 0, -0.028], isEdge: false, },
        { available: true, position: [0.028, 0, -0.028], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.028, 0, -0.028], isEdge: false, },
        { available: true, position: [0.084, 0, -0.028], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.084, 0, -0.028], isEdge: false, },
        { available: true, position: [0.14, 0, -0.028], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.14, 0, -0.028], isEdge: false, },
        { available: true, position: [0.196, 0, -0.028], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.2085, 0, -0.028], isEdge: true, },
        // Horizontal row 5
        { available: true, position: [-0.196, 0, 0.028], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.2085, 0, 0.028], isEdge: true, },
        { available: true, position: [-0.14, 0, 0.028], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.14, 0, 0.028], isEdge: false, },
        { available: true, position: [-0.084, 0, 0.028], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.084, 0, 0.028], isEdge: false, },
        { available: true, position: [-0.028, 0, 0.028], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.028, 0, 0.028], isEdge: false, },
        { available: true, position: [0.028, 0, 0.028], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.028, 0, 0.028], isEdge: false, },
        { available: true, position: [0.084, 0, 0.028], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.084, 0, 0.028], isEdge: false, },
        { available: true, position: [0.14, 0, 0.028], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.14, 0, 0.028], isEdge: false, },
        { available: true, position: [0.196, 0, 0.028], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.2085, 0, 0.028], isEdge: true, },
        // Horizontal row 6
        { available: true, position: [-0.196, 0, 0.084], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.2085, 0, 0.084], isEdge: true, },
        { available: true, position: [-0.14, 0, 0.084], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.14, 0, 0.084], isEdge: false, },
        { available: true, position: [-0.084, 0, 0.084], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.084, 0, 0.084], isEdge: false, },
        { available: true, position: [-0.028, 0, 0.084], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.028, 0, 0.084], isEdge: false, },
        { available: true, position: [0.028, 0, 0.084], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.028, 0, 0.084], isEdge: false, },
        { available: true, position: [0.084, 0, 0.084], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.084, 0, 0.084], isEdge: false, },
        { available: true, position: [0.14, 0, 0.084], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.14, 0, 0.084], isEdge: false, },
        { available: true, position: [0.196, 0, 0.084], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.2085, 0, 0.084], isEdge: true, },
        // Horizontal row 7
        { available: true, position: [-0.196, 0, 0.14], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.2085, 0, 0.14], isEdge: true, },
        { available: true, position: [-0.14, 0, 0.14], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.14, 0, 0.14], isEdge: false, },
        { available: true, position: [-0.084, 0, 0.14], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.084, 0, 0.14], isEdge: false, },
        { available: true, position: [-0.028, 0, 0.14], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.028, 0, 0.14], isEdge: false, },
        { available: true, position: [0.028, 0, 0.14], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.028, 0, 0.14], isEdge: false, },
        { available: true, position: [0.084, 0, 0.14], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.084, 0, 0.14], isEdge: false, },
        { available: true, position: [0.14, 0, 0.14], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.14, 0, 0.14], isEdge: false, },
        { available: true, position: [0.196, 0, 0.14], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.2085, 0, 0.14], isEdge: true, },
        // Horizontal row 8
        { available: true, position: [-0.196, 0, 0.196], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.2085, 0, 0.196], isEdge: true, },
        { available: true, position: [-0.14, 0, 0.196], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.14, 0, 0.196], isEdge: false, },
        { available: true, position: [-0.084, 0, 0.196], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.084, 0, 0.196], isEdge: false, },
        { available: true, position: [-0.028, 0, 0.196], rotation: [0, Math.PI / 2, 0], hoverPosition: [-0.028, 0, 0.196], isEdge: false, },
        { available: true, position: [0.028, 0, 0.196], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.028, 0, 0.196], isEdge: false, },
        { available: true, position: [0.084, 0, 0.196], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.084, 0, 0.196], isEdge: false, },
        { available: true, position: [0.14, 0, 0.196], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.14, 0, 0.196], isEdge: false, },
        { available: true, position: [0.196, 0, 0.196], rotation: [0, Math.PI / 2, 0], hoverPosition: [0.2085, 0, 0.196], isEdge: true, },
    ];
    const initialWallsInfo = [
        { placed: false, geometry: nodes.wall_1.geometry, material: materials.Wall, position: [-0.252, 0, -0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 2, },
        { placed: false, geometry: nodes.wall_2.geometry, material: materials.Wall, position: [-0.196, 0, -0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 2, },
        { placed: false, geometry: nodes.wall_3.geometry, material: materials.Wall, position: [-0.14, 0, -0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 2, },
        { placed: false, geometry: nodes.wall_4.geometry, material: materials.Wall, position: [-0.084, 0, -0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 2, },
        { placed: false, geometry: nodes.wall_5.geometry, material: materials.Wall, position: [-0.028, 0, -0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 2, },
        { placed: false, geometry: nodes.wall_6.geometry, material: materials.Wall, position: [0.028, 0, -0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 2, },
        { placed: false, geometry: nodes.wall_7.geometry, material: materials.Wall, position: [0.084, 0, -0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 2, },
        { placed: false, geometry: nodes.wall_8.geometry, material: materials.Wall, position: [0.14, 0, -0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 2, },
        { placed: false, geometry: nodes.wall_9.geometry, material: materials.Wall, position: [0.196, 0, -0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 2, },
        { placed: false, geometry: nodes.wall_10.geometry, material: materials.Wall, position: [0.252, 0, -0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 2, },
        { placed: false, geometry: nodes.wall_11.geometry, material: materials.Wall, position: [-0.252, 0, 0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 1, },
        { placed: false, geometry: nodes.wall_12.geometry, material: materials.Wall, position: [-0.196, 0, 0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 1, },
        { placed: false, geometry: nodes.wall_13.geometry, material: materials.Wall, position: [-0.14, 0, 0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 1, },
        { placed: false, geometry: nodes.wall_14.geometry, material: materials.Wall, position: [-0.084, 0, 0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 1, },
        { placed: false, geometry: nodes.wall_15.geometry, material: materials.Wall, position: [-0.028, 0, 0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 1, },
        { placed: false, geometry: nodes.wall_16.geometry, material: materials.Wall, position: [0.028, 0, 0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 1, },
        { placed: false, geometry: nodes.wall_17.geometry, material: materials.Wall, position: [0.084, 0, 0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 1, },
        { placed: false, geometry: nodes.wall_18.geometry, material: materials.Wall, position: [0.14, 0, 0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 1, },
        { placed: false, geometry: nodes.wall_19.geometry, material: materials.Wall, position: [0.196, 0, 0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 1, },
        { placed: false, geometry: nodes.wall_20.geometry, material: materials.Wall, position: [0.252, 0, 0.308], scale: [0.006, 0.053, 0.106], rotation: [0, 0, 0], player: 1, },
    ];

    // Game states
    const [isHelperVisible, setHelperVisible] = useState(false);
    // step: -1 -> AI turn
    // step: 0 -> Menu
    // step: 1 -> Pick/place piece/wall
    // step: 2 -> Current player won
    const [step, setStep] = useState(0);
    // pieceOrWall: 0 -> Null
    // pieceOrWall: 1 -> Moving piece
    // pieceOrWall: 2 -> Moving wall
    const [pieceOrWall, setPieceOrWall] = useState(0);
    const [playWithAI, setPlayWithAI] = useState(false);
    const [playerTurn, setPlayerTurn] = useState(1);
    const [indexSelected, setIndexSelected] = useState(-1);
    const [piecesInfo] = useState(initialPiecesInfo);
    const [gridsInfo] = useState(initialGridsInfo);
    const [linesInfo] = useState(initialLinesInfo);
    const [wallsInfo] = useState(initialWallsInfo);

    // Helpter functions
    useEffect(() => {
        // This useEffect function will set 'navigate' image to hidden after user managed to click and hold to rotate canvas
        function handleCanvasTouch() {
            setHelperVisible(false);
        }
        
        // mousedown event for PC
        window.addEventListener('mousedown', handleCanvasTouch);
        // touchmove event for mobile
        window.addEventListener('touchmove', handleCanvasTouch);
    
        return () => {
            window.removeEventListener('mousedown', handleCanvasTouch);
            window.removeEventListener('touchmove', handleCanvasTouch);
        };
    }, []);
    useEffect(() => {
        if (playWithAI && playerTurn === 2) {
            setStep(-1);
            // Decide whether to move piece or place wall
            var minP1Dist = BFS(gridsInfo, piecesInfo[0].grid, 0, 8, 2);
            var minP2Dist = BFS(gridsInfo, piecesInfo[1].grid, 72, 80, 2);
            // Choosing a wall
            var wallIndex = -1;
            for (let i=0; i<10; i++) {
                if (wallsInfo[i].placed === false) {
                    wallIndex = i;
                    break;
                }
            }
            var indexes = [];
            var P1DistToGoal = [];
            var P2DistToGoal = [];
            // For each placeable location
            for (let i=0; i<linesInfo.length; i++) {
                // Store the index, and distances for each piece to reach the nearest goal
                if (linesInfo[i].available === true) {
                    const temp = handleLineHoverCheck(i, 2);
                    if (temp[0] !== Infinity && temp[1] !== Infinity) {
                        indexes.push(i);
                        P1DistToGoal.push(temp[0]);
                        P2DistToGoal.push(temp[1]);
                    }
                }
            }
            // Choose the options that will increase the distance of player to goal and remain the distance of AI to goal
            const maxP1Dist = Math.max(...P1DistToGoal);
            var placeableOptions = [];
            if (maxP1Dist > minP1Dist) {
                for (let i=0; i<P1DistToGoal.length; i++) {
                    if (P1DistToGoal[i] === maxP1Dist && P2DistToGoal[i] === minP2Dist) {
                        placeableOptions.push(indexes[i]);
                    }
                }
            }

            if (placeableOptions.length !== 0 && minP1Dist < minP2Dist && wallIndex !== -1) {
                // AI decide to place down a wall
                const placeOn = placeableOptions[0];
                // const placeOn = placeableOptions[placeableOptions.length - 1];
                // Random selection
                // const placeOn = placeableOptions[Math.floor(Math.random() * placeableOptions.length)];
                handleLineClick(placeOn, wallIndex);
            } else {
                // AI decide to move the piece
                var nextIndexes = [];
                var distToGoal = [];
                // Getting all indexes that piece can move to next
                const curPieceGrid = piecesInfo[1].grid;
                
                for (let i=0; i<4; i++) {
                    const temp = checkCanMove(curPieceGrid, i);
                    if (temp !== -1) {
                        const availNextIndex = checkForHop(temp, i, 2);
                        availNextIndex.forEach((index) => {
                            nextIndexes.push(index);
                            distToGoal.push(BFS(gridsInfo, index, 72, 80, 2));
                        })
                    }
                }
                var nextBestIndexes = [];
                const minDist = Math.min(...distToGoal);
                distToGoal.forEach((dist, i) => {
                    if (dist === minDist) {
                        nextBestIndexes.push(nextIndexes[i]);
                    }
                })
                // Choosing the next grid to move to
                // const moveTo = nextBestIndexes[nextBestIndexes.length - 1];
                // Random selection
                const moveTo = nextBestIndexes[Math.floor(Math.random() * nextBestIndexes.length)];
                handleGridClick(moveTo);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playerTurn]);
    function startGame(key) {
        if (key === "1p") {
            setPlayWithAI(true);
        }
        setStep(1);
        setHelperVisible(true);
    }
    function checkWin() {
        const curPlayerGrid = piecesInfo[playerTurn-1].grid;
        if (playerTurn === 1 && curPlayerGrid >= 0 && curPlayerGrid <= 8) {
            setStep(2);
            return true;
        } else if (playerTurn === 2 && curPlayerGrid >= 72 && curPlayerGrid <= 80) {
            setStep(2);
            return true;
        }
        return false;
    }
    function checkCanMove(gridIndex, dir) {
        // Functions checks for out of bound and walls on the gridIndex in dir direction
        const direction = [-9, 9, -1, 1];
        if (!gridsInfo[gridIndex].walls[dir]) return gridIndex+direction[dir];
        return -1;
    }
    function checkForHop(gridIndex, dir, type = 1) {
        // type: 1 -> Change gridsInfo to true
        // type: 2 -> Returns all index of movable grid
        // Function to find all available grid for the piece to move to
        var nextIndexes = [];
        const oppPieceGrid = piecesInfo[playerTurn%2].grid;
        if (oppPieceGrid !== gridIndex) {
            if (type === 1) gridsInfo[gridIndex].available = true;
            else if (type === 2) nextIndexes.push(gridIndex);
        } else {
            // When opponent piece is on gridIndex
            const moveNext = checkCanMove(oppPieceGrid, dir)
            if (moveNext !== -1) {
                // Current piece can hop over opponent piece
                if (type === 1) gridsInfo[moveNext].available = true;
                else if (type === 2) nextIndexes.push(moveNext);
            } else {
                // Current piece cannot hop over opponent piece
                var moveNext1 = -1;
                var moveNext2 = -1;
                if (dir === 0 || dir === 1) {
                    moveNext1 = checkCanMove(oppPieceGrid, 2);
                    moveNext2 = checkCanMove(oppPieceGrid, 3);
                } else if (dir === 2 || dir === 3) {
                    moveNext1 = checkCanMove(oppPieceGrid, 0);
                    moveNext2 = checkCanMove(oppPieceGrid, 1);
                }
                if (moveNext1 !== -1) { 
                    if (type === 1) gridsInfo[moveNext1].available = true;
                    else if (type === 2) nextIndexes.push(moveNext1);
                }
                if (moveNext2 !== -1) {
                    if (type === 1) gridsInfo[moveNext2].available = true;
                    else if (type === 2) nextIndexes.push(moveNext2);
                }
            }
        }
        if (type === 2) return nextIndexes;
    }
    function handlePieceClick() {
        setPieceOrWall(1);

        // Updating gridsInfo.available based on currect piece locaiton
        const curPieceGrid = piecesInfo[playerTurn-1].grid;
        for (let i=0; i<4; i++) {
            const temp = checkCanMove(curPieceGrid, i);
            if (temp !== -1) checkForHop(temp, i);
        }
    }
    function handleWallClick(wallIndex) {
        // Update game states
        setIndexSelected(wallIndex);
        setPieceOrWall(2);
    }
    function resetGridAvailable() {
        gridsInfo.forEach((data) => { data.available = false; });
    }
    function handleGridClick(gridIndex) {        
        // Update pieces current position
        piecesInfo[playerTurn-1].grid = gridIndex;
        piecesInfo[playerTurn-1].position = gridsInfo[gridIndex].position;

        // Reset grids availability
        resetGridAvailable();

        // Update game states
        setStep(1);
        setPieceOrWall(0);
        if (!checkWin()) {
            setPlayerTurn((prev) => (prev === 1? 2 : 1));
        }
    }
    function updateGridsInfoWall(gridsInfo, isVertical, col, row) {
        // Update grids info for all the walls location around each grid
        if (isVertical) {
            gridsInfo[row*9+col].walls[3] = true;
            gridsInfo[(row+1)*9+col].walls[3] = true;
            gridsInfo[row*9+col+1].walls[2] = true;
            gridsInfo[(row+1)*9+col+1].walls[2] = true;
        } else {
            gridsInfo[row*9+col].walls[1] = true;
            gridsInfo[row*9+col+1].walls[1] = true;
            gridsInfo[(row+1)*9+col].walls[0] = true;
            gridsInfo[(row+1)*9+col+1].walls[0] = true;
        }
    }
    function handleLineClick(lineIndex, wallIndex = indexSelected) {
        const lineInfo = linesInfo[lineIndex];

        // Update walls info on placed wall
        wallsInfo[wallIndex].placed = true;
        wallsInfo[wallIndex].position = lineInfo.position;
        wallsInfo[wallIndex].rotation = lineInfo.rotation;

        // Update lines info to remove lines that are no longer available
        var col = -1;
        var row = -1;
        var isVertical = true;
        linesInfo[lineIndex].available = false;
        if (lineIndex <= 8*8-1) {
            // Wall is placed vertically
            col = Math.floor(lineIndex/8); // 0-7
            row = lineIndex % 8; // 0-7
            // Set adjacents area to not available
            if (row !== 0) linesInfo[lineIndex-1].available = false;
            if (row !== 7) linesInfo[lineIndex+1].available = false;
            linesInfo[64+col+(row*8)].available = false;
        } else {
            // Wall is placed horizontally
            isVertical = false;
            col = (lineIndex-64) % 8; // 0-7
            row = Math.floor((lineIndex-64)/8); // 0-7
            // Set adjacents area to not available
            if (col !== 0) linesInfo[lineIndex-1].available = false;
            if (col !== 7) linesInfo[lineIndex+1].available = false;
            linesInfo[row+(col*8)].available = false;
        }

        // Update grids info for all the walls location around each grid
        updateGridsInfoWall(gridsInfo, isVertical, col, row);

        // Reset grids availability
        resetGridAvailable();

        // Update game states
        setIndexSelected(-1);
        setPieceOrWall(0);
        setStep(1);
        setPlayerTurn((prev) => (prev === 1? 2 : 1));
    } 
    function BFS(gridsInfo, start, goalStart, goalEnd, type) {
        // type: 1 -> Return true if can reach goal from start
        // type: 2 -> Return the minimum steps to reach nearest goal
        // Sequence of directions [up, down, left, right]
        const direction = [-9, 9, -1, 1];
        var curIndex = start;
        var seq = [curIndex];
        var visited = [];
        var distance = [];
        visited.length = gridsInfo.length;
        visited.fill(0);
        distance.length = gridsInfo.length;
        distance.fill(Infinity);
        distance[curIndex] = 0;
        while (seq.length !== 0) {
            // Getting the first element in the array
            curIndex = seq.shift();
            // Terminating condition
            if (curIndex >= goalStart && curIndex <= goalEnd && type === 1) return true;
            // Set grid index as visited to prevent further visit to the index
            visited[curIndex] = 1;
            for (let i = 0; i < direction.length; i++) {
                // For all the 4 movement (up, down, left, right), check if theres a wall and if next grid is visited
                if (!gridsInfo[curIndex].walls[i] && visited[curIndex+direction[i]] === 0) {
                    seq.push(curIndex+direction[i]);
                    distance[curIndex+direction[i]] = Math.min(...[distance[curIndex]+1, distance[curIndex+direction[i]]]);
                }
            }
        }
        if (type === 1) 
            return false;
        else if (type === 2) {
            return Math.min(...(distance.slice(goalStart, goalEnd+1)));
        }
    }
    function checkCanReachGoal(gridsInfo, type) {
        // Running BFS search on both player's pieces if they can reach the goal
        if (type === 1) {
            if (BFS(gridsInfo, piecesInfo[0].grid, 0, 8, 1) && 
                BFS(gridsInfo, piecesInfo[1].grid, 72, 80, 1)) return true;
            else return false;
        } else if (type === 2) {
            return [BFS(gridsInfo, piecesInfo[0].grid, 0, 8, 2), BFS(gridsInfo, piecesInfo[1].grid, 72, 80, 2)];
        }

    }
    function handleLineHoverCheck(lineIndex, type = 1) {
        // Gets a copy of gridsInfo
        const copiedGridsInfo = JSON.parse(JSON.stringify(gridsInfo));
        
        // Get row and col so we I can update the walls states in gridsInfo later on
        var col = -1;
        var row = -1;
        var isVertical = true;
        if (lineIndex <= 8*8-1) {
            // Wall is placed vertically
            col = Math.floor(lineIndex/8); // 0-7
            row = lineIndex % 8; // 0-7
        } else {
            // Wall is placed horizontally
            isVertical = false;
            col = (lineIndex-64) % 8; // 0-7
            row = Math.floor((lineIndex-64)/8); // 0-7
        }
        // Update gridsInfo walls states
        updateGridsInfoWall(copiedGridsInfo, isVertical, col, row);

        // Run algorithm to check if piece can travel to a goal
        return checkCanReachGoal(copiedGridsInfo, type);
    }

    return (
        <section className="w-full h-screen">
            <Navbar bg={false} home={false}/>
            <section className="w-full h-screen">
                {/* Game's menu */}
                {
                    step === 0 && <GameMenu data={gameMenu["quoridor"]} startGame={startGame}/>
                }
                {/* Confetti */}
                {
                    step === 2 && <Confetti recycle={true} />
                }
                {/* Helper image */}
                {
                    <AnimatePresence>
                        {isHelperVisible && <motion.img 
                            src="/navigate.svg" 
                            alt="navigate"
                            draggable="false" 
                            className="w-52 h-52 rounded-full fixed m-auto inset-x-0 inset-y-0 z-10 pointer-events-none"
                            initial="hidden"
                            whileInView="show"
                            exit="hidden"
                            variants={simpleInOut("tween", 0.2, 0.5)}
                        />}
                    </AnimatePresence>
                }
                {/* Footer */}
                <div className={`${styles.xPaddings} w-full fixed bottom-0 pb-8 z-10 pointer-events-none`}>
                    <div className={`${styles.innerWidth} mx-auto grid grid-cols-1 md:grid-cols-4 gap-4`}>
                        <div className="flex flex-row gap-2">
                            {palettes.map((data, i) => {
                                return <ColorPalette data={data} index={i} handleClick={(i) => setSelectedPalette(i)} selected={selectedPalette}/>
                            })}
                        </div>
                        <div className="col-span-2 justify-self-center">
                            {
                                step !== 0 &&
                                <Notification text={(
                                    step === -1 ? (`AI making a choice.`) : 
                                    step === 1 ? (`${playWithAI ? ("Your") : (`Player ${playerTurn}'s`)} turn.`) : 
                                    (playWithAI ? (playerTurn === 1 ? ("You win!") : ("AI win!")) : (`Player ${playerTurn} win!`))
                                )}/>
                            }
                        </div>
                    </div>
                </div>
                {/* Game scene */}
                <Canvas className="w-full h-screen bg-transparent relative">
                    <Suspense fallback={step !== 0 && <Loader />}>
                        <CameraControls
                            minDistance={3} maxDistance={10}
                            minPolarAngle={0} maxPolarAngle={1.5}
                        />
                        <directionalLight position={[-1, 2, -3]} intensity={1} />
                        <ambientLight intensity={2} />
                        <a.group {...props} 
                            scale={boardScale}
                            position={boardPosition}
                            rotation={boardRotation}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Board.geometry}
                                material={materials.Table}
                            />
                            <group position={[0, 0.045, 0]}>
                                {piecesInfo.map((data, i) => {
                                    return <Piece {...data} handleClick={handlePieceClick} isSelected={pieceOrWall === 1 && i+1 === playerTurn} canSelect={step === 1 && i+1 === playerTurn} />
                                })}
                            </group>
                            <group position={[0, 0.046, 0]}>
                                {wallsInfo.map((data, i) => {
                                    return <Wall {...data} index={i} handleClick={handleWallClick} indexSelected={indexSelected} canSelect={step === 1 && data.player === playerTurn && !data.placed} />
                                })}
                            </group>
                            <group position={[0, 0.0201, 0]}>
                                {gridsInfo.map((data, i) => {
                                    return <Grid position={data.position} nodes={nodes} materials={materials} index={i} handleClick={handleGridClick} canSelect={pieceOrWall === 1 && data.available} playerTurn={playerTurn} />
                                })}
                            </group>
                            <group position={[0, 0.0200, 0]}>
                                {linesInfo.map((data, i) => {
                                    return <Line {...data} nodes={nodes} materials={materials} index={i} handleClick={handleLineClick} handleHover={handleLineHoverCheck} canSelect={pieceOrWall === 2 && data.available} />
                                })}
                            </group>
                            <Static nodes={nodes} materials={materials} />
                        </a.group>
                        <Environment preset={palettes[selectedPalette].preset} background blur={1} />
                    </Suspense>
                </Canvas>
            </section>
        </section>
    );
}

export default Quoridor;