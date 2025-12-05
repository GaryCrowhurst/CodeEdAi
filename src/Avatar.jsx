import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Avatar(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/animated_avatar.glb");
  const { actions } = useAnimations(animations, group);
  
  useEffect(() => {
    // Log available animations for debugging
    if (actions) {
      console.log('Available Ready Player Me animations:', Object.keys(actions));
    }
    
    if (actions && actions.AvatarIdle) {
      actions.AvatarIdle.play();
    }
  }, [actions]);
  
  // Safety check - if nodes aren't loaded, return null
  if (!nodes || !materials) {
    return null;
  }
  
  return (
    <group ref={group} {...props} dispose={null} rotation={[0.05, Math.PI / 2, -0.1]}>
      <group name="Scene">
        <group name="Armature">
          {nodes.Hips && <primitive object={nodes.Hips} />}
          {nodes.Ctrl_ArmPole_IK_Left && <primitive object={nodes.Ctrl_ArmPole_IK_Left} />}
          {nodes.Ctrl_Hand_IK_Left && <primitive object={nodes.Ctrl_Hand_IK_Left} />}
          {nodes.Ctrl_ArmPole_IK_Right && <primitive object={nodes.Ctrl_ArmPole_IK_Right} />}
          {nodes.Ctrl_Hand_IK_Right && <primitive object={nodes.Ctrl_Hand_IK_Right} />}
          {nodes.Ctrl_Foot_IK_Left && <primitive object={nodes.Ctrl_Foot_IK_Left} />}
          {nodes.Ctrl_LegPole_IK_Left && <primitive object={nodes.Ctrl_LegPole_IK_Left} />}
          {nodes.Ctrl_Foot_IK_Right && <primitive object={nodes.Ctrl_Foot_IK_Right} />}
          {nodes.Ctrl_LegPole_IK_Right && <primitive object={nodes.Ctrl_LegPole_IK_Right} />}
          {nodes.Ctrl_Master && <primitive object={nodes.Ctrl_Master} />}
          {nodes.Wolf3D_Glasses && (
            <skinnedMesh
              name="Wolf3D_Glasses"
              geometry={nodes.Wolf3D_Glasses.geometry}
              material={materials.Wolf3D_Glasses}
              skeleton={nodes.Wolf3D_Glasses.skeleton}
            />
          )}
          {nodes.EyeLeft && (
            <skinnedMesh
              name="EyeLeft"
              geometry={nodes.EyeLeft.geometry}
              material={nodes.EyeLeft.material}
              skeleton={nodes.EyeLeft.skeleton}
              morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
              morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
          )}
          {nodes.EyeRight && (
            <skinnedMesh
              name="EyeRight"
              geometry={nodes.EyeRight.geometry}
              material={nodes.EyeRight.material}
              skeleton={nodes.EyeRight.skeleton}
              morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
              morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
          )}
          {nodes.Wolf3D_Head && (
            <skinnedMesh
              name="Wolf3D_Head"
              geometry={nodes.Wolf3D_Head.geometry}
              material={materials.Wolf3D_Skin}
              skeleton={nodes.Wolf3D_Head.skeleton}
              morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
              morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
          )}
          {nodes.Wolf3D_Teeth && (
            <skinnedMesh
              name="Wolf3D_Teeth"
              geometry={nodes.Wolf3D_Teeth.geometry}
              material={materials.Wolf3D_Teeth}
              skeleton={nodes.Wolf3D_Teeth.skeleton}
              morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
              morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
          )}
          {nodes.Wolf3D_Hair && (
            <skinnedMesh
              name="Wolf3D_Hair"
              geometry={nodes.Wolf3D_Hair.geometry}
              material={materials.Wolf3D_Hair}
              skeleton={nodes.Wolf3D_Hair.skeleton}
            />
          )}
          {nodes.Wolf3D_Outfit_Footwear && (
            <skinnedMesh
              name="Wolf3D_Outfit_Footwear"
              geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
              material={materials.Wolf3D_Outfit_Footwear}
              skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
          )}
          {nodes.Wolf3D_Outfit_Top && (
            <skinnedMesh
              name="Wolf3D_Outfit_Top"
              geometry={nodes.Wolf3D_Outfit_Top.geometry}
              material={materials.Wolf3D_Outfit_Top}
              skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
          )}
          {nodes.Wolf3D_Outfit_Bottom && (
            <skinnedMesh
              name="Wolf3D_Outfit_Bottom"
              geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
              material={materials.Wolf3D_Outfit_Bottom}
              skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
          )}
          {nodes.Wolf3D_Body && (
            <skinnedMesh
              name="Wolf3D_Body"
              geometry={nodes.Wolf3D_Body.geometry}
              material={materials.Wolf3D_Body}
              skeleton={nodes.Wolf3D_Body.skeleton}
            />
          )}
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/animated_avatar.glb");
