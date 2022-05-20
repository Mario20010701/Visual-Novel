namespace Template {
    export async function scn_Tempel():ƒS.SceneReturn {
      await ƒS.Location.show(backgrounds.BG_Black)
      await ƒS.update(1);
      await ƒS.Location.show(backgrounds.BG_Temple);
      await ƒS.update(3);
      await ƒS.Character.show(characters.General_Genkimura_Heirato, characters.General_Genkimura_Heirato.pose.default, ƒS.positions.left);
      await ƒS.update(1);
      await ƒS.Character.show(characters.General_Hideki_Tojo, characters.General_Hideki_Tojo.pose.default, ƒS.positions.bottomcenter);
      await ƒS.update(1);
      await ƒS.Character.show(characters.General_Yamamoto_Isoruku, characters.General_Yamamoto_Isoruku.pose.default, ƒS.positions.right);
      await ƒS.update(1);
    };
  }