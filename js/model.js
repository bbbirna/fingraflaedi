

const initModel = (model) => {

        const fingers = {}

        fingers.pinky_1 = model.skeleton.bones[14].rotation;
        fingers.pinky_2 = model.skeleton.bones[15].rotation;
        fingers.pinky_3 = model.skeleton.bones[16].rotation;
        fingers.ring_1 = model.skeleton.bones[9].rotation;
        fingers.ring_2 = model.skeleton.bones[10].rotation;
        fingers.ring_3 = model.skeleton.bones[11].rotation;
        fingers.middle_1 = model.skeleton.bones[4].rotation;
        fingers.middle_2 = model.skeleton.bones[5].rotation;
        fingers.middle_3 = model.skeleton.bones[6].rotation;
        fingers.index_1 = model.skeleton.bones[19].rotation;
        fingers.index_2 = model.skeleton.bones[20].rotation;
        fingers.index_3 = model.skeleton.bones[21].rotation;
        fingers.thumb_1 = model.skeleton.bones[23].rotation;
        fingers.thumb_2 = model.skeleton.bones[24].rotation;
        fingers.thumb_3 = model.skeleton.bones[25].rotation;
        fingers.wrist = model.skeleton.bones[1].rotation;
        fingers.palm_1 = model.skeleton.bones[7].rotation;
        fingers.palm_2 = model.skeleton.bones[12].rotation;
        fingers.palm_3 = model.skeleton.bones[17].rotation;

        return fingers;
}

