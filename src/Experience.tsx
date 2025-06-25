import { OrbitControls } from "@react-three/drei"
import { useEffect, useMemo, useState } from "react";
import * as THREE from 'three/webgpu';
import { baseColor, patternMap, patternOptions } from "./patterns";
import type { PatternKey } from "./patterns";
import { Pane } from "tweakpane";

function Experience() {
    const material = useMemo(() => {
        const mat = new THREE.MeshStandardNodeMaterial();
        mat.side = THREE.DoubleSide;
        return mat;
      }, []);

    const [selectedPattern, setSelectedPattern] = useState<PatternKey>('red');
    const [addColor, setAddColor] = useState<boolean>(false);

    useEffect(() => {
        const pane = new Pane({ title: 'Patterns' });

        const target = { pattern: selectedPattern, addColor: false };

        const binding = pane.addBinding(target, 'pattern', {
            label: 'Select Pattern',
            options: patternOptions,
        });

        const colorBinding = pane.addBinding(target, 'addColor', {
            label: 'Add Color'
        });

        binding.on('change', (ev) => {
            setSelectedPattern(ev.value as PatternKey);
            target.pattern = ev.value;
        });

        colorBinding.on('change', (ev) => {
            const val = ev.value as boolean;
            setAddColor(val);
            target.addColor = val;
        })

        return () => pane.dispose();
    }, []);

    useEffect(() => {
        if(!material) return;
        const patternFn = patternMap[selectedPattern];
        let pattern = patternFn();
        if(addColor) {
            pattern = baseColor(pattern);
        }
        material.colorNode = pattern;
        material.needsUpdate = true;
    }, [selectedPattern, material, addColor]);


    return (
        <>
            <OrbitControls target={[0, 0, 0]} />
            <ambientLight intensity={1.5} />
            <directionalLight position={[3, 3, 3]} intensity={1.0} />
            <mesh key={selectedPattern} material={material}>
                <planeGeometry args={[1, 1, 32, 32]} />
            </mesh>
        </>
    );
}

export default Experience