import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
	const { nodes, materials } = useGLTF("pc.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Asset3DLoadersceneRoot.geometry}
				material={nodes.Asset3DLoadersceneRoot.material}
				position={[ 0, -1.35, 0]}
			/>
		</group>
	);
}

useGLTF.preload("pc.glb");