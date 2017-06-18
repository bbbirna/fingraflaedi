//breyta letters í array og hafa objectin inni i honum. i hand.js nota svo letters.filter()



const initLetters = (model) => {

      let letters = [];

      letters = [

            // ----- LETTERS -----

            { "letter": "a", "finger": fingers.pinky_1, "x": 1.5, "y": 0, "z": -0.5 },
            { "letter": "a", "finger": fingers.pinky_2, "x": 1, "y": 0, "z": -0.2 },
            { "letter": "a", "finger": fingers.pinky_3, "x": 0.5, "y": 0.3, "z": -0.2 },

            { "letter": "a", "finger": fingers.ring_1, "x": 1.4, "y": 0, "z": -0.1 },
            { "letter": "a", "finger": fingers.ring_2, "x": 1.7, "y": 0, "z": -0.2 },
            { "letter": "a", "finger": fingers.ring_3, "x": 0.3, "y": 0, "z": 0 },

            { "letter": "a", "finger": fingers.middle_1, "x": 1.3, "y": 0, "z": 0 },
            { "letter": "a", "finger": fingers.middle_2, "x": 1.8, "y": 0, "z": 0 },
            { "letter": "a", "finger": fingers.middle_3, "x": 0.3, "y": 0, "z": 0 },

            { "letter": "a", "finger": fingers.index_1, "x": 1.15, "y": 0, "z": 0.15 },
            { "letter": "a", "finger": fingers.index_2, "x": 1.9, "y": 0, "z": 0.25 },
            { "letter": "a", "finger": fingers.index_3, "x": 0.6, "y": 0, "z": 0 },

            { "letter": "a", "finger": fingers.thumb_1, "x": 0, "y": -0.6, "z": 0.5 },
            { "letter": "a", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "a", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "a", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 },

            { "letter": "a", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.055 },
            { "letter": "a", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.085 },
            { "letter": "a", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.055 },

            // ----- B -----

            { "letter": "b", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": -0.3 },
            { "letter": "b", "finger": fingers.pinky_2, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "b", "finger": fingers.pinky_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "b", "finger": fingers.ring_1, "x": 0, "y": 0, "z": -0.1 },
            { "letter": "b", "finger": fingers.ring_2, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "b", "finger": fingers.ring_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "b", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "b", "finger": fingers.middle_2, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "b", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "b", "finger": fingers.index_1, "x": 0, "y": 0, "z": 0.1 },
            { "letter": "b", "finger": fingers.index_2, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "b", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "b", "finger": fingers.thumb_1, "x": -0.1, "y": -0.4, "z": 0.4 },
            { "letter": "b", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": 0.2 },
            { "letter": "b", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.1 },

            { "letter": "b", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "b", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 },
            { "letter": "b", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.12 },
            { "letter": "b", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.08 },

            // // ----- C -----

            { "letter": "c", "finger": fingers.pinky_1, "x": 1.1, "y": 0, "z": -0.5 },
            { "letter": "c", "finger": fingers.pinky_2, "x": 1.3, "y": 0.1, "z": -0.4 },
            { "letter": "c", "finger": fingers.pinky_3, "x": 0.8, "y": 0.2, "z": -0.3 },

            { "letter": "c", "finger": fingers.ring_1, "x": 1.2, "y": 0, "z": -0.2 },
            { "letter": "c", "finger": fingers.ring_2, "x": 1.9, "y": 0.1, "z": -0.2 },
            { "letter": "c", "finger": fingers.ring_3, "x": 0.3, "y": 0, "z": 0 },

            { "letter": "c", "finger": fingers.middle_1, "x": 1.1, "y": 0, "z": 0 },
            { "letter": "c", "finger": fingers.middle_2, "x": 2, "y": 0, "z": 0 },
            { "letter": "c", "finger": fingers.middle_3, "x": 0.3, "y": 0, "z": 0 },

            { "letter": "c", "finger": fingers.index_1, "x": 0.6, "y": -0.1, "z": 0 },
            { "letter": "c", "finger": fingers.index_2, "x": 0.7, "y": 0, "z": 0 },
            { "letter": "c", "finger": fingers.index_3, "x": 0.7, "y": 0, "z": 0 },

            { "letter": "c", "finger": fingers.thumb_1, "x": 0.1, "y": -1.2, "z": 0 },
            { "letter": "c", "finger": fingers.thumb_2, "x": 0.1, "y": 0.2, "z": 0.1 },
            { "letter": "c", "finger": fingers.thumb_3, "x": 0, "y": -0.2, "z": 0.4 },

            { "letter": "c", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "c", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.02 },
            { "letter": "c", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.07 },
            { "letter": "c", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.05 },

            // ----- D -----

            { "letter": "d", "finger": fingers.pinky_1, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "d", "finger": fingers.pinky_2, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "d", "finger": fingers.pinky_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "d", "finger": fingers.ring_1, "x": 0.3, "y": 0.1, "z": 0 },
            { "letter": "d", "finger": fingers.ring_2, "x": 0.3, "y": 0, "z": 0 },
            { "letter": "d", "finger": fingers.ring_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "d", "finger": fingers.middle_1, "x": 0.6, "y": 0, "z": 0 },
            { "letter": "d", "finger": fingers.middle_2, "x": 1.4, "y": 0, "z": 0 },
            { "letter": "d", "finger": fingers.middle_3, "x": 0.7, "y": 0, "z": 0 },

            { "letter": "d", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "d", "finger": fingers.index_2, "x": 0.2, "y": 0, "z": 0 },
            { "letter": "d", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "d", "finger": fingers.thumb_1, "x": 0, "y": -1.7, "z": -0.1 },
            { "letter": "d", "finger": fingers.thumb_2, "x": 0.6, "y": 0.5, "z": 0.1 },
            { "letter": "d", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0.2 },

            { "letter": "d", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "d", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "d", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "d", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 },

            // ----- E -----

            { "letter": "e", "finger": fingers.pinky_1, "x": 0.6, "y": 0, "z": -0.3 },
            { "letter": "e", "finger": fingers.pinky_2, "x": 1.4, "y": 0, "z": -0.6 },
            { "letter": "e", "finger": fingers.pinky_3, "x": 0.5, "y": 0.3, "z": -0.2 },

            { "letter": "e", "finger": fingers.ring_1, "x": 0.6, "y": -0.1, "z": -0.1 },
            { "letter": "e", "finger": fingers.ring_2, "x": 1.9, "y": 0, "z": -0.4 },
            { "letter": "e", "finger": fingers.ring_3, "x": 0.6, "y": 0, "z": 0 },

            { "letter": "e", "finger": fingers.middle_1, "x": 0.5, "y": 0, "z": 0 },
            { "letter": "e", "finger": fingers.middle_2, "x": 1.9, "y": 0, "z": 0 },
            { "letter": "e", "finger": fingers.middle_3, "x": 0.8, "y": 0, "z": 0 },

            { "letter": "e", "finger": fingers.index_1, "x": 1, "y": 0, "z": 0.3 },
            { "letter": "e", "finger": fingers.index_2, "x": 1.4, "y": 0, "z": 0.2 },
            { "letter": "e", "finger": fingers.index_3, "x": 0.7, "y": 0, "z": 0.1 },

            { "letter": "e", "finger": fingers.thumb_1, "x": 0, "y": -1.5, "z": 0 },
            { "letter": "e", "finger": fingers.thumb_2, "x": 1, "y": 0.4, "z": 0.3 },
            { "letter": "e", "finger": fingers.thumb_3, "x": 0, "y": 0.1, "z": 0.9 },

            { "letter": "e", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "e", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.03 },
            { "letter": "e", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.11 },
            { "letter": "e", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.01 },

            // ----- F -----

            { "letter": "f", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": -0.3 },
            { "letter": "f", "finger": fingers.pinky_2, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "f", "finger": fingers.pinky_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "f", "finger": fingers.ring_1, "x": 0.1, "y": 0, "z": -0.1 },
            { "letter": "f", "finger": fingers.ring_2, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "f", "finger": fingers.ring_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "f", "finger": fingers.middle_1, "x": 0.2, "y": 0, "z": 0 },
            { "letter": "f", "finger": fingers.middle_2, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "f", "finger": fingers.middle_3, "x": 0, "y": 0, "z":0 },

            { "letter": "f", "finger": fingers.index_1, "x": 0.7, "y": -0.2, "z": 0.2 },
            { "letter": "f", "finger": fingers.index_2, "x": 1.3, "y": -0.3, "z": 0 },
            { "letter": "f", "finger": fingers.index_3, "x": 0.2, "y": 0, "z": 0 },

            { "letter": "f", "finger": fingers.thumb_1, "x": 0.2, "y": -1.1, "z": 0.6 },
            { "letter": "f", "finger": fingers.thumb_2, "x": 0.2, "y": 0.2, "z": 0 },
            { "letter": "f", "finger": fingers.thumb_3, "x": 0, "y": 0, "z":0 },

            { "letter": "f", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "f", "finger": fingers.palm_1, "x": 0, "y": 0, "z":-0.04 },
            { "letter": "f", "finger": fingers.palm_2, "x": 0, "y": 0, "z":-0.1 },
            { "letter": "f", "finger": fingers.palm_3, "x": 0, "y": 0, "z":0.06 },

            // ----- G -----

            { "letter": "g", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": -0.2 },
            { "letter": "g", "finger": fingers.pinky_2, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "g", "finger": fingers.pinky_3, "x": 0.2, "y": 0, "z": 0 },

            { "letter": "g", "finger": fingers.ring_1, "x": 0.2, "y": 0, "z": -0.1 },
            { "letter": "g", "finger": fingers.ring_2, "x": 0.2, "y": 0, "z": 0 },
            { "letter": "g", "finger": fingers.ring_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "g", "finger": fingers.middle_1, "x": 0.7, "y": 0, "z": 0 },
            { "letter": "g", "finger": fingers.middle_2, "x": 1.6, "y": 0, "z": 0 },
            { "letter": "g", "finger": fingers.middle_3, "x": 0.3, "y": 0, "z": 0 },

            { "letter": "g", "finger": fingers.index_1, "x": 0.1, "y": -0.1, "z": 0.1 },
            { "letter": "g", "finger": fingers.index_2, "x": 0.1, "y": -0.1, "z": 0 },
            { "letter": "g", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "g", "finger": fingers.thumb_1, "x": 0.7, "y": -1.3, "z": 1.1 },
            { "letter": "g", "finger": fingers.thumb_2, "x": 0.2, "y": 0.1, "z": -0.1 },
            { "letter": "g", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "g", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "g", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 },
            { "letter": "g", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.09 },
            { "letter": "g", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.06 },

            // ----- H -----

            { "letter": "h", "finger": fingers.pinky_1, "x": 0.6, "y": 0.2, "z": -0.4 },
            { "letter": "h", "finger": fingers.pinky_2, "x": 1.5, "y": 0, "z": -0.6 },
            { "letter": "h", "finger": fingers.pinky_3, "x": 0.5, "y": 0.2, "z": -0.3 },

            { "letter": "h", "finger": fingers.ring_1, "x": 0.7, "y": 0.2, "z": -0.2 },
            { "letter": "h", "finger": fingers.ring_2, "x": 2.2, "y": 0, "z": -0.3 },
            { "letter": "h", "finger": fingers.ring_3, "x": 0.7, "y": 0, "z": 0 },

            { "letter": "h", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "h", "finger": fingers.middle_2, "x": 0.2, "y": 0, "z": 0 },
            { "letter": "h", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "h", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0.1 },
            { "letter": "h", "finger": fingers.index_2, "x": 0.1, "y": -0.1, "z": 0 },
            { "letter": "h", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "h", "finger": fingers.thumb_1, "x": 0.6, "y": -0.5, "z": 1.1 },
            { "letter": "h", "finger": fingers.thumb_2, "x": 0, "y": -0.5, "z": 0.2 },
            { "letter": "h", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0.2 },

            { "letter": "h", "finger": fingers.wrist, "x": -0.01, "y": 0, "z": 0 },

            { "letter": "h", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 },
            { "letter": "h", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.09 },
            { "letter": "h", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.07 },

            // ----- I -----

            { "letter": "i", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": -0.2 },
            { "letter": "i", "finger": fingers.pinky_2, "x": 0.2, "y": 0, "z": 0 },
            { "letter": "i", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "i", "finger": fingers.ring_1, "x": 1, "y": 0, "z": -0.1 },
            { "letter": "i", "finger": fingers.ring_2, "x": 1.8, "y": -0.1, "z": -0.3 },
            { "letter": "i", "finger": fingers.ring_3, "x": 0.5, "y": 0, "z": 0 },

            { "letter": "i", "finger": fingers.middle_1, "x": 1, "y": 0, "z": 0 },
            { "letter": "i", "finger": fingers.middle_2, "x": 2, "y": 0, "z": 0 },
            { "letter": "i", "finger": fingers.middle_3, "x": 0.4, "y": 0, "z": 0 },

            { "letter": "i", "finger": fingers.index_1, "x": 1.1, "y": -0.2, "z": 0.2 },
            { "letter": "i", "finger": fingers.index_2, "x": 1.7, "y": -0.2, "z": 0 },
            { "letter": "i", "finger": fingers.index_3, "x": 0.6, "y": 0, "z": 0 },

            { "letter": "i", "finger": fingers.thumb_1, "x": 0.7, "y": -0.5, "z": 0.7 },
            { "letter": "i", "finger": fingers.thumb_2, "x": 0.2, "y": -0.1, "z": 0.6 },
            { "letter": "i", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0.4 },

            { "letter": "i", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 },

            { "letter": "i", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 },
            { "letter": "i", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.03 },
            { "letter": "i", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.06 },

            // ----- J -----

            { "letter": "j", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": 0.2 },
            { "letter": "j", "finger": fingers.pinky_2, "x": 0.2, "y": 0, "z": 0 },
            { "letter": "j", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "j", "finger": fingers.ring_1, "x": 1, "y": 0, "z": -0.1 },
            { "letter": "j", "finger": fingers.ring_2, "x": 1.8, "y": -0.1, "z": -0.3 },
            { "letter": "j", "finger": fingers.ring_3, "x": 0.5, "y": 0, "z": 0 },

            { "letter": "j", "finger": fingers.middle_1, "x": 1, "y": 0, "z": 0 },
            { "letter": "j", "finger": fingers.middle_2, "x": 2, "y": 0, "z": 0 },
            { "letter": "j", "finger": fingers.middle_3, "x": 0.4, "y": 0, "z": 0 },

            { "letter": "j", "finger": fingers.index_1, "x": 1.1, "y": -0.2, "z": 0.2 },
            { "letter": "j", "finger": fingers.index_2, "x": 1.7, "y": -0.2, "z": 0 },
            { "letter": "j", "finger": fingers.index_3, "x": 0.6, "y": 0, "z": 0 },

            { "letter": "j", "finger": fingers.thumb_1, "x": 0.7, "y": -0.5, "z": 0.7 },
            { "letter": "j", "finger": fingers.thumb_2, "x": 0.2, "y": -0.1, "z": 0.6 },
            { "letter": "j", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0.4 },

            { "letter": "j", "finger": fingers.wrist, "x": 0, "y": 0.1, "z": 0 },

            { "letter": "j", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 },
            { "letter": "j", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.03 },
            { "letter": "j", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.06 },

            // // ----- K -----

            { "letter": "k", "finger": fingers.pinky_1, "x": 0.9, "y": 0.1, "z": -0.5 },
            { "letter": "k", "finger": fingers.pinky_2, "x": 1.5, "y": 0.3, "z": -0.6 },
            { "letter": "k", "finger": fingers.pinky_3, "x": 0.8, "y": 0.2, "z": -0.2 },

            { "letter": "k", "finger": fingers.ring_1, "x": 1, "y": 0, "z": -0.2 },
            { "letter": "k", "finger": fingers.ring_2, "x": 2, "y": 0, "z": -0.4 },
            { "letter": "k", "finger": fingers.ring_3, "x": 0.6, "y": 0, "z": 0 },

            { "letter": "k", "finger": fingers.middle_1, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "k", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "k", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "k", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "k", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "k", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "k", "finger": fingers.thumb_1, "x": 0, "y": -1.7, "z": 0.5 },
            { "letter": "k", "finger": fingers.thumb_2, "x": 1.1, "y": 1, "z": -0.2 },
            { "letter": "k", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.6 },

            { "letter": "k", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0.2 },

            { "letter": "k", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "k", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.04 },
            { "letter": "k", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 },

            // ----- L -----

            { "letter": "l", "finger": fingers.pinky_1, "x": 1, "y": 0, "z": -0.5 },
            { "letter": "l", "finger": fingers.pinky_2, "x": 1.4, "y": 0, "z": -0.6 },
            { "letter": "l", "finger": fingers.pinky_3, "x": 0.4, "y": 0.4, "z": -0.2 },

            { "letter": "l", "finger": fingers.ring_1, "x": 1, "y": 0, "z": -0.2 },
            { "letter": "l", "finger": fingers.ring_2, "x": 1.8, "y": 0, "z": -0.3 },
            { "letter": "l", "finger": fingers.ring_3, "x": 0.8, "y": 0, "z": 0 },

            { "letter": "l", "finger": fingers.middle_1, "x": 1, "y": 0, "z": 0 },
            { "letter": "l", "finger": fingers.middle_2, "x": 1.9, "y": 0, "z": 0 },
            { "letter": "l", "finger": fingers.middle_3, "x": 1, "y": 0, "z": 0 },

            { "letter": "l", "finger": fingers.index_1, "x": 0, "y": 0, "z": 0.1 },
            { "letter": "l", "finger": fingers.index_2, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "l", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "l", "finger": fingers.thumb_1, "x": 0, "y": -0.7, "z": 0 },
            { "letter": "l", "finger": fingers.thumb_2, "x": -0.1, "y": 0, "z": -0.3 },
            { "letter": "l", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.6 },

            { "letter": "l", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 },

            { "letter": "l", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "l", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.06 },
            { "letter": "l", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 },

            // ----- M -----

            { "letter": "m", "finger": fingers.pinky_1, "x": 1.3, "y": 0, "z": -0.5 },
            { "letter": "m", "finger": fingers.pinky_2, "x": 1.2, "y": 0, "z": -0.4 },
            { "letter": "m", "finger": fingers.pinky_3, "x": 0.8, "y": 0.4, "z": -0.4 },

            { "letter": "m", "finger": fingers.ring_1, "x": 1.4, "y": 0, "z": -0.2 },
            { "letter": "m", "finger": fingers.ring_2, "x": 1.1, "y": 0, "z": -0.1 },
            { "letter": "m", "finger": fingers.ring_3, "x": 0.2, "y": 0, "z": 0 },

            { "letter": "m", "finger": fingers.middle_1, "x": 1.3, "y": 0, "z": 0 },
            { "letter": "m", "finger": fingers.middle_2, "x": 1.2, "y": 0, "z": 0 },
            { "letter": "m", "finger": fingers.middle_3, "x": 0.2, "y": 0, "z": 0 },

            { "letter": "m", "finger": fingers.index_1, "x": 1.4, "y": 0, "z": 0.33 },
            { "letter": "m", "finger": fingers.index_2, "x": 1.1, "y": 0, "z": 0 },
            { "letter": "m", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "m", "finger": fingers.thumb_1, "x": 0.4, "y": -0.4, "z": 0.9 },
            { "letter": "m", "finger": fingers.thumb_2, "x": 0.3, "y": 0, "z": 0.5 },
            { "letter": "m", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 1.2 },

            { "letter": "m", "finger": fingers.wrist, "x": 0.4, "y": 0, "z": 0 },

            { "letter": "m", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "m", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.06 },
            { "letter": "m", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 },

            // ----- N -----

            { "letter": "n", "finger": fingers.pinky_1, "x": 1.3, "y": 0, "z": -0.5 },
            { "letter": "n", "finger": fingers.pinky_2, "x": 1.2, "y": 0, "z": -0.4 },
            { "letter": "n", "finger": fingers.pinky_3, "x": 0.8, "y": 0.4, "z": -0.4 },

            { "letter": "n", "finger": fingers.ring_1, "x": 1.3, "y": 0, "z": -0.2 },
            { "letter": "n", "finger": fingers.ring_2, "x": 1.6, "y": 0.1, "z": -0.2 },
            { "letter": "n", "finger": fingers.ring_3, "x": 1, "y": 0.1, "z": -0.1 },

            { "letter": "n", "finger": fingers.middle_1, "x": 1.3, "y": 0, "z": 0 },
            { "letter": "n", "finger": fingers.middle_2, "x": 1.2, "y": 0, "z": 0 },
            { "letter": "n", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "n", "finger": fingers.index_1, "x": 1.4, "y": 0, "z": 0.33 },
            { "letter": "n", "finger": fingers.index_2, "x": 1.1, "y": 0, "z": 0 },
            { "letter": "n", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "n", "finger": fingers.thumb_1, "x": 0.4, "y": -0.4, "z": 0.9 },
            { "letter": "n", "finger": fingers.thumb_2, "x": 0.3, "y": 0, "z": 0.5 },
            { "letter": "n", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 1.2 },

            { "letter": "n", "finger": fingers.wrist, "x": 0.4, "y": 0, "z": 0 },

            { "letter": "n", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "n", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.08 },
            { "letter": "n", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 },

            // ----- O -----

            { "letter": "o", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": -0.3 },
            { "letter": "o", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "o", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "o", "finger": fingers.ring_1, "x": 0, "y": 0, "z": -0.1 },
            { "letter": "o", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "o", "finger": fingers.ring_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "o", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "o", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "o", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "o", "finger": fingers.index_1, "x": 0.7, "y": 0, "z": 0.1 },
            { "letter": "o", "finger": fingers.index_2, "x": 1.3, "y": -0.3, "z": 0 },
            { "letter": "o", "finger": fingers.index_3, "x": 0.6, "y": 0, "z": 0 },

            { "letter": "o", "finger": fingers.thumb_1, "x": 0.5, "y": -0.8, "z": 0.5 },
            { "letter": "o", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "o", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0.5 },

            { "letter": "o", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 },

            { "letter": "o", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 },
            { "letter": "o", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 },
            { "letter": "o", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.05 },

            // ----- Q -----

            { "letter": "q", "finger": fingers.pinky_1, "x": 1.2, "y": 0, "z": -0.4 },
            { "letter": "q", "finger": fingers.pinky_2, "x": 1.3, "y": 0, "z": -0.4 },
            { "letter": "q", "finger": fingers.pinky_3, "x": 0.9, "y": 0.4, "z": -0.5 },

            { "letter": "q", "finger": fingers.ring_1, "x": 1.3, "y": 0, "z": -0.1 },
            { "letter": "q", "finger": fingers.ring_2, "x": 1.7, "y": 0, "z": -0.2 },
            { "letter": "q", "finger": fingers.ring_3, "x": 0.6, "y": 0.2, "z": -0.1 },

            { "letter": "q", "finger": fingers.middle_1, "x": 1.4, "y": 0, "z": 0 },
            { "letter": "q", "finger": fingers.middle_2, "x": 1.7, "y": 0, "z": 0 },
            { "letter": "q", "finger": fingers.middle_3, "x": 0.6, "y": 0, "z": 0 },

            { "letter": "q", "finger": fingers.index_1, "x": 1.3, "y": 0, "z": 0.1 },
            { "letter": "q", "finger": fingers.index_2, "x": 0, "y": -0.3, "z": 0 },
            { "letter": "q", "finger": fingers.index_3, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "q", "finger": fingers.thumb_1, "x": 0.5, "y": -1.4, "z": 0.5 },
            { "letter": "q", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": -0.2 },
            { "letter": "q", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.6 },

            { "letter": "q", "finger": fingers.wrist, "x": 1.3, "y": -0.1, "z": 0.6 },

            { "letter": "q", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 },
            { "letter": "q", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 },
            { "letter": "q", "finger": fingers.palm_3, "x": 0, "y": 0, "z": -0.05 },

            // ----- P -----

            { "letter": "p", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": -0.2 },
            { "letter": "p", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "p", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "p", "finger": fingers.ring_1, "x": 0.1, "y": 0, "z": -0.1 },
            { "letter": "p", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "p", "finger": fingers.ring_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "p", "finger": fingers.middle_1, "x": 1.1, "y": 0, "z": -0.1 },
            { "letter": "p", "finger": fingers.middle_2, "x": 0.6, "y": 0, "z": 0 },
            { "letter": "p", "finger": fingers.middle_3, "x": 0.2, "y": 0, "z": 0 },

            { "letter": "p", "finger": fingers.index_1, "x": 0, "y": 0, "z": 0.1 },
            { "letter": "p", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "p", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "p", "finger": fingers.thumb_1, "x": -0.2, "y": -1.7, "z": 0.1 },
            { "letter": "p", "finger": fingers.thumb_2, "x": 0.5, "y": 0.1, "z": -0.1 },
            { "letter": "p", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.5 },

            { "letter": "p", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 },

            { "letter": "p", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "p", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.05 },
            { "letter": "p", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.05 },

            // ----- R -----

            { "letter": "r", "finger": fingers.pinky_1, "x": 1.1, "y": 0, "z": -0.4 },
            { "letter": "r", "finger": fingers.pinky_2, "x": 1.4, "y": 0, "z": -0.6 },
            { "letter": "r", "finger": fingers.pinky_3, "x": 0.3, "y": 0.3, "z": -0.1 },

            { "letter": "r", "finger": fingers.ring_1, "x": 1.1, "y": 0, "z": 0 },
            { "letter": "r", "finger": fingers.ring_2, "x": 2, "y": 0, "z": -0.3 },
            { "letter": "r", "finger": fingers.ring_3, "x": 0.4, "y": 0, "z": 0 },

            { "letter": "r", "finger": fingers.middle_1, "x": -0.2, "y": 0, "z": -0.2 },
            { "letter": "r", "finger": fingers.middle_2, "x": 0.4, "y": 0, "z": 0 },
            { "letter": "r", "finger": fingers.middle_3, "x": 0.2, "y": 0, "z": 0 },

            { "letter": "r", "finger": fingers.index_1, "x": 0.2, "y": 0, "z": 0.3 },
            { "letter": "r", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "r", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "r", "finger": fingers.thumb_1, "x": 0, "y": -1.8, "z": 0.2 },
            { "letter": "r", "finger": fingers.thumb_2, "x": 0.9, "y": 0.3, "z": 0.1 },
            { "letter": "r", "finger": fingers.thumb_3, "x": 0.4, "y": 0.2, "z": 0 },

            { "letter": "r", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 },

            { "letter": "r", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.09 },
            { "letter": "r", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 },
            { "letter": "r", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.02 },

            // ----- S -----

            { "letter": "s", "finger": fingers.pinky_1, "x": 1.1, "y": 0, "z": -0.4 },
            { "letter": "s", "finger": fingers.pinky_2, "x": 1.4, "y": 0, "z": -0.6 },
            { "letter": "s", "finger": fingers.pinky_3, "x": 0.3, "y": 0.3, "z": -0.1 },

            { "letter": "s", "finger": fingers.ring_1, "x": 1.1, "y": 0, "z": 0 },
            { "letter": "s", "finger": fingers.ring_2, "x": 2, "y": 0, "z": -0.3 },
            { "letter": "s", "finger": fingers.ring_3, "x": 0.4, "y": 0, "z": 0 },

            { "letter": "s", "finger": fingers.middle_1, "x": 1, "y": 0, "z": 0 },
            { "letter": "s", "finger": fingers.middle_2, "x": 2.1, "y": 0, "z": 0 },
            { "letter": "s", "finger": fingers.middle_3, "x": 0.5, "y": 0, "z": 0 },

            { "letter": "s", "finger": fingers.index_1, "x": 0, "y": 0, "z": 0.1 },
            { "letter": "s", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "s", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "s", "finger": fingers.thumb_1, "x": 0.1, "y": -1.7, "z": 0.3 },
            { "letter": "s", "finger": fingers.thumb_2, "x": 0.9, "y": 0.3, "z": 0.1 },
            { "letter": "s", "finger": fingers.thumb_3, "x": 0.5, "y": 0, "z": 0.2 },

            { "letter": "s", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "s", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.09 },
            { "letter": "s", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 },
            { "letter": "s", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.02 },


            // // ----- T -----

            { "letter": "t", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": -0.3 },
            { "letter": "t", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "t", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "t", "finger": fingers.ring_1, "x": 0, "y": 0, "z": -0.1 },
            { "letter": "t", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "t", "finger": fingers.ring_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "t", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "t", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "t", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "t", "finger": fingers.index_1, "x": 1.2, "y": 0, "z": 0 },
            { "letter": "t", "finger": fingers.index_2, "x": 0.6, "y": 0, "z": 0 },
            { "letter": "t", "finger": fingers.index_3, "x": 0.2, "y": 0, "z": 0 },

            { "letter": "t", "finger": fingers.thumb_1, "x": 0.4, "y": -0.4, "z": 0.7 },
            { "letter": "t", "finger": fingers.thumb_2, "x": 0, "y": 0.3, "z": 0.4 },
            { "letter": "t", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.4 },

            { "letter": "t", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 },

            { "letter": "t", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 },
            { "letter": "t", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 },
            { "letter": "t", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.02 },

            // // ----- U -----

            { "letter": "u", "finger": fingers.pinky_1, "x": 0.6, "y": 0.2, "z": -0.4 },
            { "letter": "u", "finger": fingers.pinky_2, "x": 1.5, "y": 0, "z": -0.6 },
            { "letter": "u", "finger": fingers.pinky_3, "x": 0.5, "y": 0.2, "z": -0.3 },

            { "letter": "u", "finger": fingers.ring_1, "x": 0.7, "y": 0.2, "z": -0.2 },
            { "letter": "u", "finger": fingers.ring_2, "x": 2.2, "y": 0, "z": -0.3 },
            { "letter": "u", "finger": fingers.ring_3, "x": 0.7, "y": 0, "z": 0 },

            { "letter": "u", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "u", "finger": fingers.middle_2, "x": 0.2, "y": 0, "z": 0 },
            { "letter": "u", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "u", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0.1 },
            { "letter": "u", "finger": fingers.index_2, "x": 0.1, "y": -0.1, "z": 0 },
            { "letter": "u", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "u", "finger": fingers.thumb_1, "x": 0.6, "y": -0.5, "z": 1.1 },
            { "letter": "u", "finger": fingers.thumb_2, "x": 0, "y": -0.5, "z": 0.2 },
            { "letter": "u", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0.2 },

            { "letter": "u", "finger": fingers.wrist, "x": -0.01, "y": 0, "z": 0 },

            { "letter": "u", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 },
            { "letter": "u", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.09 },
            { "letter": "u", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.07 },

            // // ----- V -----

            { "letter": "v", "finger": fingers.pinky_1, "x": 1.1, "y": 0, "z": -0.4 },
            { "letter": "v", "finger": fingers.pinky_2, "x": 1.4, "y": 0, "z": -0.6 },
            { "letter": "v", "finger": fingers.pinky_3, "x": 0.3, "y": 0.3, "z": -0.1 },

            { "letter": "v", "finger": fingers.ring_1, "x": 1.1, "y": 0, "z": 0 },
            { "letter": "v", "finger": fingers.ring_2, "x": 2, "y": 0, "z": -0.3 },
            { "letter": "v", "finger": fingers.ring_3, "x": 0.4, "y": 0, "z": 0 },

            { "letter": "v", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0.1 },
            { "letter": "v", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "v", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "v", "finger": fingers.index_1, "x": 0, "y": 0, "z": -0.1 },
            { "letter": "v", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "v", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "v", "finger": fingers.thumb_1, "x": 0.1, "y": -1.8, "z": 0.3 },
            { "letter": "v", "finger": fingers.thumb_2, "x": 0.9, "y": 0.1, "z": 0 },
            { "letter": "v", "finger": fingers.thumb_3, "x": 0.2, "y": 0, "z": 0.3 },

            { "letter": "v", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0.1 },

            { "letter": "v", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.09 },
            { "letter": "v", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 },
            { "letter": "v", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.02 },

            // // ----- W -----

            { "letter": "w", "finger": fingers.pinky_1, "x": 1, "y": 0, "z": -0.5 },
            { "letter": "w", "finger": fingers.pinky_2, "x": 1.3, "y": 0, "z": -0.7 },
            { "letter": "w", "finger": fingers.pinky_3, "x": 0.3, "y": 0.3, "z": -0.1 },

            { "letter": "w", "finger": fingers.ring_1, "x": 0.1, "y": 0, "z": 0.1 },
            { "letter": "w", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "w", "finger": fingers.ring_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "w", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "w", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "w", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "w", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "w", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "w", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "w", "finger": fingers.thumb_1, "x": 0.1, "y": -2, "z": 0.3 },
            { "letter": "w", "finger": fingers.thumb_2, "x": 1.1, "y": 0.1, "z": 0 },
            { "letter": "w", "finger": fingers.thumb_3, "x": 0.2, "y": 0, "z": 0.3 },

            { "letter": "w", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0.1 },

            { "letter": "w", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.01 },
            { "letter": "w", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.05 },
            { "letter": "w", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.02 },

            // // ----- X -----

            { "letter": "x", "finger": fingers.pinky_1, "x": 0.7, "y": 0.2, "z": -0.4 },
            { "letter": "x", "finger": fingers.pinky_2, "x": 1.7, "y": 0, "z": -0.6 },
            { "letter": "x", "finger": fingers.pinky_3, "x": 0.4, "y": 0.1, "z": -0.2 },

            { "letter": "x", "finger": fingers.ring_1, "x": 0.7, "y": 0.2, "z": -0.2 },
            { "letter": "x", "finger": fingers.ring_2, "x": 2.1, "y": 0, "z": -0.3 },
            { "letter": "x", "finger": fingers.ring_3, "x": 0.7, "y": 0, "z": 0 },

            { "letter": "x", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "x", "finger": fingers.middle_2, "x": 0.2, "y": 0, "z": 0 },
            { "letter": "x", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "x", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0.1 },
            { "letter": "x", "finger": fingers.index_2, "x": 0.1, "y": -0.1, "z": 0 },
            { "letter": "x", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "x", "finger": fingers.thumb_1, "x": 0, "y": -0.1, "z": 0.5 },
            { "letter": "x", "finger": fingers.thumb_2, "x": 0, "y": -0.1, "z": 0.1 },
            { "letter": "x", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.3 },

            { "letter": "x", "finger": fingers.wrist, "x": -0.4, "y": 0.2, "z": 0.3 },

            { "letter": "x", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.05 },
            { "letter": "x", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.15 },
            { "letter": "x", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.07 },

            // // ----- Y -----

            { "letter": "y", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "y", "finger": fingers.pinky_2, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "y", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "y", "finger": fingers.ring_1, "x": 1.1, "y": 0.1, "z": -0.1 },
            { "letter": "y", "finger": fingers.ring_2, "x": 1.9, "y": 0.1, "z": -0.2 },
            { "letter": "y", "finger": fingers.ring_3, "x": 0.5, "y": 0, "z": 0 },

            { "letter": "y", "finger": fingers.middle_1, "x": 1, "y": 0, "z": 0 },
            { "letter": "y", "finger": fingers.middle_2, "x": 2, "y": 0.1, "z": 0 },
            { "letter": "y", "finger": fingers.middle_3, "x": 0.6, "y": 0, "z": 0 },

            { "letter": "y", "finger": fingers.index_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "y", "finger": fingers.index_2, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "y", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "y", "finger": fingers.thumb_1, "x": 0, "y": -1.6, "z": 0 },
            { "letter": "y", "finger": fingers.thumb_2, "x": 0.7, "y": -0.1, "z": 0.3 },
            { "letter": "y", "finger": fingers.thumb_3, "x": 0.1, "y": -0.2, "z": 0.2 },

            { "letter": "y", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0.1},

            { "letter": "y", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.03 },
            { "letter": "y", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "y", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 },

            // // ----- Z -----

            { "letter": "z", "finger": fingers.pinky_1, "x": 0.7, "y": 0, "z": -0.3 },
            { "letter": "z", "finger": fingers.pinky_2, "x": 1.7, "y": 0, "z": -0.7 },
            { "letter": "z", "finger": fingers.pinky_3, "x": 0.6, "y": 0.1, "z": -0.2 },

            { "letter": "z", "finger": fingers.ring_1, "x": 0.9, "y": 0.1, "z": -0.1 },
            { "letter": "z", "finger": fingers.ring_2, "x": 2, "y": 0, "z": -0.2 },
            { "letter": "z", "finger": fingers.ring_3, "x": 0.6, "y": 0, "z": -0.1 },

            { "letter": "z", "finger": fingers.middle_1, "x": 0.9, "y": 0, "z": 0 },
            { "letter": "z", "finger": fingers.middle_2, "x": 2.1, "y": 0, "z": 0 },
            { "letter": "z", "finger": fingers.middle_3, "x": 0.4, "y": 0, "z": 0 },

            { "letter": "z", "finger": fingers.index_1, "x": 1, "y": 0, "z": 0.1 },
            { "letter": "z", "finger": fingers.index_2, "x": 0.3, "y": 0, "z": 0 },
            { "letter": "z", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "z", "finger": fingers.thumb_1, "x": 0.1, "y": -1.1, "z": 0.4 },
            { "letter": "z", "finger": fingers.thumb_2, "x": 0.7, "y": 0, "z": 0.1 },
            { "letter": "z", "finger": fingers.thumb_3, "x": 0.2, "y": 0, "z": 0.6 },

            { "letter": "z", "finger": fingers.wrist, "x": 0.4, "y": 0.1, "z": -0.1 },

            { "letter": "z", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.05 },
            { "letter": "z", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.12 },
            { "letter": "z", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.08 },

            // // ----- Þ -----

            { "letter": "þ", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "þ", "finger": fingers.pinky_2, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "þ", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "þ", "finger": fingers.ring_1, "x": 1.1, "y": 0.1, "z": -0.1 },
            { "letter": "þ", "finger": fingers.ring_2, "x": 1.9, "y": 0.1, "z": -0.2 },
            { "letter": "þ", "finger": fingers.ring_3, "x": 0.5, "y": 0, "z": 0 },

            { "letter": "þ", "finger": fingers.middle_1, "x": 0.1, "y": 0, "z": 0.1 },
            { "letter": "þ", "finger": fingers.middle_2, "x": 0, "y": 0.1, "z": 0 },
            { "letter": "þ", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "þ", "finger": fingers.index_1, "x": 0, "y": 0, "z": -0.1 },
            { "letter": "þ", "finger": fingers.index_2, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "þ", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "þ", "finger": fingers.thumb_1, "x": 0, "y": -1.7, "z": 0 },
            { "letter": "þ", "finger": fingers.thumb_2, "x": 0.7, "y": -0.1, "z": 0.3 },
            { "letter": "þ", "finger": fingers.thumb_3, "x": 0.1, "y": -0.2, "z": 0.2 },

            { "letter": "þ", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0.1 },

            { "letter": "þ", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.03 },
            { "letter": "þ", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "þ", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 },

            // // ----- Æ -----

            { "letter": "æ", "finger": fingers.pinky_1, "x": 0.3, "y": 0, "z": 0 },
            { "letter": "æ", "finger": fingers.pinky_2, "x": 0.9, "y": 0.2, "z": -0.3 },
            { "letter": "æ", "finger": fingers.pinky_3, "x": 0.4, "y": 0.3, "z": -0.2 },

            { "letter": "æ", "finger": fingers.ring_1, "x": 0.3, "y": 0.1, "z": 0 },
            { "letter": "æ", "finger": fingers.ring_2, "x": 0.8, "y": 0, "z": 0 },
            { "letter": "æ", "finger": fingers.ring_3, "x": 0.6, "y": 0, "z": -0.1 },

            { "letter": "æ", "finger": fingers.middle_1, "x": 0.3, "y": 0, "z": 0 },
            { "letter": "æ", "finger": fingers.middle_2, "x": 0.7, "y": 0, "z": 0 },
            { "letter": "æ", "finger": fingers.middle_3, "x": 0.5, "y": 0, "z": 0 },

            { "letter": "æ", "finger": fingers.index_1, "x": 0.5, "y": -0.1, "z": 0 },
            { "letter": "æ", "finger": fingers.index_2, "x": 0.6, "y": -0.1, "z": 0.1 },
            { "letter": "æ", "finger": fingers.index_3, "x": 0.5, "y": 0, "z": 0 },

            { "letter": "æ", "finger": fingers.thumb_1, "x": 0, "y": -0.6, "z": 0 },
            { "letter": "æ", "finger": fingers.thumb_2, "x": 0.4, "y": -0.3, "z": 0.1 },
            { "letter": "æ", "finger": fingers.thumb_3, "x": 0.2, "y": 0, "z": 0.4 },

            { "letter": "æ", "finger": fingers.wrist, "x": -0.3, "y": 0, "z": -0.1 },

            { "letter": "æ", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0.07 },
            { "letter": "æ", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0.09 },
            { "letter": "æ", "finger": fingers.palm_3, "x": 0, "y": 0, "z": -0.03 },

            // // ----- Ö -----

            { "letter": "ö", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": -0.3 },
            { "letter": "ö", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "ö", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "ö", "finger": fingers.ring_1, "x": 0, "y": 0, "z": -0.1 },
            { "letter": "ö", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "ö", "finger": fingers.ring_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "ö", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "ö", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "ö", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "ö", "finger": fingers.index_1, "x": 0.7, "y": 0, "z": 0.1 },
            { "letter": "ö", "finger": fingers.index_2, "x": 1.3, "y": -0.3, "z": 0 },
            { "letter": "ö", "finger": fingers.index_3, "x": 0.6, "y": 0, "z": 0 },

            { "letter": "ö", "finger": fingers.thumb_1, "x": 0.5, "y": -0.8, "z": 0.5 },
            { "letter": "ö", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "ö", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0.5 },

            { "letter": "ö", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 },

            { "letter": "ö", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 },
            { "letter": "ö", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 },
            { "letter": "ö", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.05 },


            // ----- NUMBERS -----

            // ----- 1 -----

           

            { "letter": "1", "finger": fingers.pinky_1, "x": 1.1, "y": 0, "z": -0.4 },
            { "letter": "1", "finger": fingers.pinky_2, "x": 1.4, "y": 0, "z": -0.6 },
            { "letter": "1", "finger": fingers.pinky_3, "x": 0.3, "y": 0.3, "z": -0.1 },

            { "letter": "1", "finger": fingers.ring_1, "x": 1.1, "y": 0, "z": 0 },
            { "letter": "1", "finger": fingers.ring_2, "x": 2, "y": 0, "z": -0.3 },
            { "letter": "1", "finger": fingers.ring_3, "x": 0.4, "y": 0, "z": 0 },

            { "letter": "1", "finger": fingers.middle_1, "x": 1, "y": 0, "z": 0 },
            { "letter": "1", "finger": fingers.middle_2, "x": 2.1, "y": 0, "z": 0 },
            { "letter": "1", "finger": fingers.middle_3, "x": 0.5, "y": 0, "z": 0 },

            { "letter": "1", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0.1 },
            { "letter": "1", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "1", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "1", "finger": fingers.thumb_1, "x": 0.1, "y": -1.7, "z": 0.3 },
            { "letter": "1", "finger": fingers.thumb_2, "x": 0.7, "y": 0.3, "z": 0.1 },
            { "letter": "1", "finger": fingers.thumb_3, "x": 0.1, "y": 0, "z": 0.1 },

            { "letter": "1", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "1", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.09 },
            { "letter": "1", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 },
            { "letter": "1", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.02 },

            // ----- 2 -----

            { "letter": "2", "finger": fingers.pinky_1, "x": 1.1, "y": 0, "z": -0.4 },
            { "letter": "2", "finger": fingers.pinky_2, "x": 1.4, "y": 0, "z": -0.6 },
            { "letter": "2", "finger": fingers.pinky_3, "x": 0.3, "y": 0.3, "z": -0.1 },

            { "letter": "2", "finger": fingers.ring_1, "x": 1.1, "y": 0, "z": 0 },
            { "letter": "2", "finger": fingers.ring_2, "x": 2, "y": 0, "z": -0.3 },
            { "letter": "2", "finger": fingers.ring_3, "x": 0.4, "y": 0, "z": 0 },

            { "letter": "2", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0.1 },
            { "letter": "2", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "2", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "2", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "2", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "2", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "2", "finger": fingers.thumb_1, "x": 0.1, "y": -1.8, "z": 0.3 },
            { "letter": "2", "finger": fingers.thumb_2, "x": 0.9, "y": 0.1, "z": 0 },
            { "letter": "2", "finger": fingers.thumb_3, "x": 0.2, "y": 0, "z": 0.3 },

            { "letter": "2", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "2", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.09 },
            { "letter": "2", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 },
            { "letter": "2", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.02 },

            // ----- 3 -----

            { "letter": "3", "finger": fingers.pinky_1, "x": 1.1, "y": 0, "z": -0.4 },
            { "letter": "3", "finger": fingers.pinky_2, "x": 1.4, "y": 0, "z": -0.6 },
            { "letter": "3", "finger": fingers.pinky_3, "x": 0.3, "y": 0.3, "z": -0.1 },

            { "letter": "3", "finger": fingers.ring_1, "x": 1.1, "y": 0, "z": 0 },
            { "letter": "3", "finger": fingers.ring_2, "x": 2, "y": 0, "z": -0.3 },
            { "letter": "3", "finger": fingers.ring_3, "x": 0.4, "y": 0, "z": 0 },

            { "letter": "3", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0.1 },
            { "letter": "3", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "3", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "3", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "3", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "3", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "3", "finger": fingers.thumb_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "3", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "3", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.5 },

            { "letter": "3", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "3", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.09 },
            { "letter": "3", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 },
            { "letter": "3", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 },

            // ----- 4 -----

            { "letter": "4", "finger": fingers.pinky_1, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "4", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "4", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "4", "finger": fingers.ring_1, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "4", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "4", "finger": fingers.ring_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "4", "finger": fingers.middle_1, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "4", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "4", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "4", "finger": fingers.index_1, "x": 0.2, "y": 0, "z": 0 },
            { "letter": "4", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "4", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "4", "finger": fingers.thumb_1, "x": 0.1, "y": -1.9, "z": 0.5 },
            { "letter": "4", "finger": fingers.thumb_2, "x": 1.1, "y": 0.7, "z": 0 },
            { "letter": "4", "finger": fingers.thumb_3, "x": 0.2, "y": 0, "z": 0.7 },

            { "letter": "4", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "4", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "4", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "4", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 },

            // ----- 5 -----

            { "letter": "5", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": 0.1 },
            { "letter": "5", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "5", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "5", "finger": fingers.ring_1, "x": 0, "y": 0, "z": 0.1 },
            { "letter": "5", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "5", "finger": fingers.ring_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "5", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "5", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "5", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "5", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": -0.1 },
            { "letter": "5", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "5", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "5", "finger": fingers.thumb_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "5", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "5", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.5 },

            { "letter": "5", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "5", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "5", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "5", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 },

            // ----- 6 -----

            { "letter": "6", "finger": fingers.pinky_1, "x": 0.8, "y": 0.1, "z": -0.5 },
            { "letter": "6", "finger": fingers.pinky_2, "x": 1.5, "y": 0.1, "z": -0.7 },
            { "letter": "6", "finger": fingers.pinky_3, "x": 0.6, "y": 0.3, "z": -0.2 },

            { "letter": "6", "finger": fingers.ring_1, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "6", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "6", "finger": fingers.ring_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "6", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "6", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "6", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "6", "finger": fingers.index_1, "x": 0.2, "y": 0, "z": 0 },
            { "letter": "6", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "6", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "6", "finger": fingers.thumb_1, "x": 0.1, "y": -2.3, "z": 0.2 },
            { "letter": "6", "finger": fingers.thumb_2, "x": 1.1, "y": 0.4, "z": 0 },
            { "letter": "6", "finger": fingers.thumb_3, "x": 0.2, "y": 0, "z": 0 },

            { "letter": "6", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "6", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "6", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "6", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 },

            // ----- 7 -----

            { "letter": "7", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "7", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "7", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "7", "finger": fingers.ring_1, "x": 1.1, "y": 0, "z": -0.1 },
            { "letter": "7", "finger": fingers.ring_2, "x": 1.9, "y": 0, "z": -0.4 },
            { "letter": "7", "finger": fingers.ring_3, "x": 0.5, "y": 0, "z": 0 },

            { "letter": "7", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "7", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "7", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "7", "finger": fingers.index_1, "x": 0.2, "y": 0, "z": 0 },
            { "letter": "7", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "7", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "7", "finger": fingers.thumb_1, "x": 0.1, "y": -1.9, "z": 0.1 },
            { "letter": "7", "finger": fingers.thumb_2, "x": 0.9, "y": 0.4, "z": 0.2 },
            { "letter": "7", "finger": fingers.thumb_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "7", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "7", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "7", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "7", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 },

            // ----- 8 -----

            { "letter": "8", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "8", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "8", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "8", "finger": fingers.ring_1, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "8", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "8", "finger": fingers.ring_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "8", "finger": fingers.middle_1, "x": 0.9, "y": 0, "z": 0 },
            { "letter": "8", "finger": fingers.middle_2, "x": 2, "y": 0, "z": 0 },
            { "letter": "8", "finger": fingers.middle_3, "x": 0.7, "y": 0, "z": 0 },

            { "letter": "8", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "8", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "8", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "8", "finger": fingers.thumb_1, "x": 0.1, "y": -1.7, "z": 0.2 },
            { "letter": "8", "finger": fingers.thumb_2, "x": 0.6, "y": 0.4, "z": 0.2 },
            { "letter": "8", "finger": fingers.thumb_3, "x": 0.1, "y": 0, "z": 0 },

            { "letter": "8", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "8", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "8", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "8", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 },

            // ----- 9 -----

            { "letter": "9", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "9", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "9", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "9", "finger": fingers.ring_1, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "9", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "9", "finger": fingers.ring_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "9", "finger": fingers.middle_1, "x": 0.2, "y": 0, "z": 0 },
            { "letter": "9", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "9", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "9", "finger": fingers.index_1, "x": 0.9, "y": 0, "z": 0.2 },
            { "letter": "9", "finger": fingers.index_2, "x": 2, "y": 0, "z": 0.2 },
            { "letter": "9", "finger": fingers.index_3, "x": 0.3, "y": 0, "z": 0 },

            { "letter": "9", "finger": fingers.thumb_1, "x": 0.1, "y": -0.8, "z": 0.3 },
            { "letter": "9", "finger": fingers.thumb_2, "x": 0.4, "y": -0.2, "z": 0.2 },
            { "letter": "9", "finger": fingers.thumb_3, "x": 0, "y": -0.3, "z": 0.5 },

            { "letter": "9", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 },

            { "letter": "9", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 },
            { "letter": "9", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "9", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 },

            // ----- 10 -----

            { "letter": "°", "finger": fingers.pinky_1, "x": 1.2, "y": 0.2, "z": -0.4 },
            { "letter": "°", "finger": fingers.pinky_2, "x": 1.3, "y": 0, "z": -0.2 },
            { "letter": "°", "finger": fingers.pinky_3, "x": 1, "y": 0.3, "z": -0.5 },

            { "letter": "°", "finger": fingers.ring_1, "x": 1.2, "y": 0, "z": -0.1 },
            { "letter": "°", "finger": fingers.ring_2, "x": 1.6, "y": 0.1, "z": -0.2 },
            { "letter": "°", "finger": fingers.ring_3, "x": 1.3, "y": 0, "z": -0.1 },

            { "letter": "°", "finger": fingers.middle_1, "x": 1.2, "y": 0, "z": 0 },
            { "letter": "°", "finger": fingers.middle_2, "x": 1.6, "y": 0, "z": 0 },
            { "letter": "°", "finger": fingers.middle_3, "x": 1.4, "y": 0, "z": 0 },

            { "letter": "°", "finger": fingers.index_1, "x": 1.3, "y": -0.1, "z": 0.2 },
            { "letter": "°", "finger": fingers.index_2, "x": 1.8, "y": -0.2, "z": 0.2 },
            { "letter": "°", "finger": fingers.index_3, "x": 0.7, "y": 0, "z": 0 },

            { "letter": "°", "finger": fingers.thumb_1, "x": 0.1, "y": -0.2, "z": 0 },
            { "letter": "°", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "°", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.5 },

            { "letter": "°", "finger": fingers.wrist, "x": 0, "y": 0.2, "z": 0.5 },

            { "letter": "°", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.07 },
            { "letter": "°", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.12 },
            { "letter": "°", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.06 },

            // ----- SPACE -----

            { "letter": " ", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": 0 },
            { "letter": " ", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 },
            { "letter": " ", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 },

            { "letter": " ", "finger": fingers.ring_1, "x": 0, "y": 0, "z": 0 },
            { "letter": " ", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 },
            { "letter": " ", "finger": fingers.ring_3, "x": 0, "y": 0, "z": 0 },

            { "letter": " ", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 },
            { "letter": " ", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 },
            { "letter": " ", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 },

            { "letter": " ", "finger": fingers.index_1, "x": 0, "y": 0, "z": 0 },
            { "letter": " ", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 },
            { "letter": " ", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 },

            { "letter": " ", "finger": fingers.thumb_1, "x": 0, "y": 0, "z": 0 },
            { "letter": " ", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": 0 },
            { "letter": " ", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0 },

            { "letter": " ", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 },

            { "letter": " ", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 },
            { "letter": " ", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 },
            { "letter": " ", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 },

           

            { "letter": "*", "finger": fingers.pinky_1, "x": 0.5, "y": 0, "z": -0.3 },
            { "letter": "*", "finger": fingers.pinky_2, "x": 1.8, "y": 0.1, "z": -0.9 },
            { "letter": "*", "finger": fingers.pinky_3, "x": 0.6, "y": 0.2, "z": 0 },

            { "letter": "*", "finger": fingers.ring_1, "x": 0.7, "y": 0.2, "z": -0.2 },
            { "letter": "*", "finger": fingers.ring_2, "x": 2.1, "y": 0, "z": -0.3 },
            { "letter": "*", "finger": fingers.ring_3, "x": 0.6, "y": 0, "z": 0 },

            { "letter": "*", "finger": fingers.middle_1, "x": 0.1, "y": 0, "z": 0 },
            { "letter": "*", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 },
            { "letter": "*", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 },

            { "letter": "*", "finger": fingers.index_1, "x": 0.8, "y": -0.1, "z": 0.1 },
            { "letter": "*", "finger": fingers.index_2, "x": 2, "y": 0, "z": 0.2 },
            { "letter": "*", "finger": fingers.index_3, "x": 0.7, "y": 0, "z": 0.1 },

            { "letter": "*", "finger": fingers.thumb_1, "x": 0.1, "y": -0.5, "z": 0.4 },
            { "letter": "*", "finger": fingers.thumb_2, "x": 0.8, "y": 0.3, "z": 0 },
            { "letter": "*", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0.7 },

            { "letter": "*", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 },

            { "letter": "*", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.03 },
            { "letter": "*", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.11 },
            { "letter": "*", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.07 }


      ]

      return letters;

}




// //breyta letters í array og hafa objectin inni i honum. i hand.js nota svo letters.filter()



// const initLetters = (model) => {

//             const letters = {}

//             // ----- LETTERS -----

//             letters.letter_a = {};

//             letters.letter_a.no01 = { "letter": "a", "finger": fingers.pinky_1, "x": 1.5, "y": 0, "z": -0.5 }
//             letters.letter_a.no02 = { "letter": "a", "finger": fingers.pinky_2, "x": 1, "y": 0, "z": -0.2 }
//             letters.letter_a.no03 = { "letter": "a", "finger": fingers.pinky_3, "x": 0.5, "y": 0.3, "z": -0.2 }

//             letters.letter_a.no04 = { "letter": "a", "finger": fingers.ring_1, "x": 1.4, "y": 0, "z": -0.1 }
//             letters.letter_a.no05 = { "letter": "a", "finger": fingers.ring_2, "x": 1.7, "y": 0, "z": -0.2 }
//             letters.letter_a.no06 = { "letter": "a", "finger": fingers.ring_3, "x": 0.3, "y": 0, "z": 0 }

//             letters.letter_a.no07 = { "letter": "a", "finger": fingers.middle_1, "x": 1.3, "y": 0, "z": 0 }
//             letters.letter_a.no08 = { "letter": "a", "finger": fingers.middle_2, "x": 1.8, "y": 0, "z": 0 }
//             letters.letter_a.no09 = { "letter": "a", "finger": fingers.middle_3, "x": 0.3, "y": 0, "z": 0 }

//             letters.letter_a.no10 = { "letter": "a", "finger": fingers.index_1, "x": 1.15, "y": 0, "z": 0.15 }
//             letters.letter_a.no11 = { "letter": "a", "finger": fingers.index_2, "x": 1.9, "y": 0, "z": 0.25 }
//             letters.letter_a.no12 = { "letter": "a", "finger": fingers.index_3, "x": 0.6, "y": 0, "z": 0 }

//             letters.letter_a.no13 = { "letter": "a", "finger": fingers.thumb_1, "x": 0, "y": -0.6, "z": 0.5 }
//             letters.letter_a.no14 = { "letter": "a", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": 0 }
//             letters.letter_a.no15 = { "letter": "a", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0 }

//             letters.letter_a.no16 = { "letter": "a", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 }

//             letters.letter_a.no17 = { "letter": "a", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.055 }
//             letters.letter_a.no18 = { "letter": "a", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.085 }
//             letters.letter_a.no19 = { "letter": "a", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.055 }

//             // ----- B -----

//             letters.letter_b = {};

//             letters.letter_b.no01 = { "letter": "b", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": -0.3 }
//             letters.letter_b.no02 = { "letter": "b", "finger": fingers.pinky_2, "x": 0.1, "y": 0, "z": 0 }
//             letters.letter_b.no03 = { "letter": "b", "finger": fingers.pinky_3, "x": 0.1, "y": 0, "z": 0 }

//             letters.letter_b.no04 = { "letter": "b", "finger": fingers.ring_1, "x": 0, "y": 0, "z": -0.1 }
//             letters.letter_b.no05 = { "letter": "b", "finger": fingers.ring_2, "x": 0.1, "y": 0, "z": 0 }
//             letters.letter_b.no06 = { "letter": "b", "finger": fingers.ring_3, "x": 0.1, "y": 0, "z": 0 }

//             letters.letter_b.no07 = { "letter": "b", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 }
//             letters.letter_b.no08 = { "letter": "b", "finger": fingers.middle_2, "x": 0.1, "y": 0, "z": 0 }
//             letters.letter_b.no09 = { "letter": "b", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 }

//             letters.letter_b.no10 = { "letter": "b", "finger": fingers.index_1, "x": 0, "y": 0, "z": 0.1 }
//             letters.letter_b.no11 = { "letter": "b", "finger": fingers.index_2, "x": 0.1, "y": 0, "z": 0 }
//             letters.letter_b.no12 = { "letter": "b", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 }

//             letters.letter_b.no13 = { "letter": "b", "finger": fingers.thumb_1, "x": -0.1, "y": -0.4, "z": 0.4 }
//             letters.letter_b.no14 = { "letter": "b", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": 0.2 }
//             letters.letter_b.no15 = { "letter": "b", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.1 }

//             letters.letter_b.no16 = { "letter": "b", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 }

//             letters.letter_b.no17 = { "letter": "b", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 }
//             letters.letter_b.no18 = { "letter": "b", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.12 }
//             letters.letter_b.no19 = { "letter": "b", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.08 }

//             // // ----- C -----

//             letters.letter_c = {};

//             letters.letter_c.no01 = { "letter": "c", "finger": fingers.pinky_1, "x": 1.1, "y": 0, "z": -0.5 };
//             letters.letter_c.no02 = { "letter": "c", "finger": fingers.pinky_2, "x": 1.3, "y": 0.1, "z": -0.4 };
//             letters.letter_c.no03 = { "letter": "c", "finger": fingers.pinky_3, "x": 0.8, "y": 0.2, "z": -0.3 };

//             letters.letter_c.no04 = { "letter": "c", "finger": fingers.ring_1, "x": 1.2, "y": 0, "z": -0.2 };
//             letters.letter_c.no05 = { "letter": "c", "finger": fingers.ring_2, "x": 1.9, "y": 0.1, "z": -0.2 };
//             letters.letter_c.no06 = { "letter": "c", "finger": fingers.ring_3, "x": 0.3, "y": 0, "z": 0 };

//             letters.letter_c.no07 = { "letter": "c", "finger": fingers.middle_1, "x": 1.1, "y": 0, "z": 0 };
//             letters.letter_c.no08 = { "letter": "c", "finger": fingers.middle_2, "x": 2, "y": 0, "z": 0 };
//             letters.letter_c.no09 = { "letter": "c", "finger": fingers.middle_3, "x": 0.3, "y": 0, "z": 0 };

//             letters.letter_c.no10 = { "letter": "c", "finger": fingers.index_1, "x": 0.6, "y": -0.1, "z": 0 };
//             letters.letter_c.no11 = { "letter": "c", "finger": fingers.index_2, "x": 0.7, "y": 0, "z": 0 };
//             letters.letter_c.no12 = { "letter": "c", "finger": fingers.index_3, "x": 0.7, "y": 0, "z": 0 };

//             letters.letter_c.no13 = { "letter": "c", "finger": fingers.thumb_1, "x": 0.1, "y": -1.2, "z": 0 };
//             letters.letter_c.no14 = { "letter": "c", "finger": fingers.thumb_2, "x": 0.1, "y": 0.2, "z": 0.1 };
//             letters.letter_c.no15 = { "letter": "c", "finger": fingers.thumb_3, "x": 0, "y": -0.2, "z": 0.4 };

//             letters.letter_c.no16 = { "letter": "c", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 };

//             letters.letter_c.no17 = { "letter": "c", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.02 };
//             letters.letter_c.no18 = { "letter": "c", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.07 };
//             letters.letter_c.no19 = { "letter": "c", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.05 };

//             // ----- D -----

//             letters.letter_d = {};

//             letters.letter_d.no01 = { "letter": "d", "finger": fingers.pinky_1, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_d.no02 = { "letter": "d", "finger": fingers.pinky_2, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_d.no03 = { "letter": "d", "finger": fingers.pinky_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_d.no04 = { "letter": "d", "finger": fingers.ring_1, "x": 0.3, "y": 0.1, "z": 0 };
//             letters.letter_d.no05 = { "letter": "d", "finger": fingers.ring_2, "x": 0.3, "y": 0, "z": 0 };
//             letters.letter_d.no06 = { "letter": "d", "finger": fingers.ring_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_d.no07 = { "letter": "d", "finger": fingers.middle_1, "x": 0.6, "y": 0, "z": 0 };
//             letters.letter_d.no08 = { "letter": "d", "finger": fingers.middle_2, "x": 1.4, "y": 0, "z": 0 };
//             letters.letter_d.no09 = { "letter": "d", "finger": fingers.middle_3, "x": 0.7, "y": 0, "z": 0 };

//             letters.letter_d.no10 = { "letter": "d", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_d.no11 = { "letter": "d", "finger": fingers.index_2, "x": 0.2, "y": 0, "z": 0 };
//             letters.letter_d.no12 = { "letter": "d", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_d.no13 = { "letter": "d", "finger": fingers.thumb_1, "x": 0, "y": -1.7, "z": -0.1 };
//             letters.letter_d.no14 = { "letter": "d", "finger": fingers.thumb_2, "x": 0.6, "y": 0.5, "z": 0.1 };
//             letters.letter_d.no15 = { "letter": "d", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0.2 };

//             letters.letter_d.no16 = { "letter": "d", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 };

//             letters.letter_d.no17 = { "letter": "d", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_d.no18 = { "letter": "d", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_d.no19 = { "letter": "d", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 };

//             // ----- E -----

//             letters.letter_e = {};

//             letters.letter_e.no01 = { "letter": "e", "finger": fingers.pinky_1, "x": 0.6, "y": 0, "z": -0.3 };
//             letters.letter_e.no02 = { "letter": "e", "finger": fingers.pinky_2, "x": 1.4, "y": 0, "z": -0.6 };
//             letters.letter_e.no03 = { "letter": "e", "finger": fingers.pinky_3, "x": 0.5, "y": 0.3, "z": -0.2 };

//             letters.letter_e.no04 = { "letter": "e", "finger": fingers.ring_1, "x": 0.6, "y": -0.1, "z": -0.1 };
//             letters.letter_e.no05 = { "letter": "e", "finger": fingers.ring_2, "x": 1.9, "y": 0, "z": -0.4 };
//             letters.letter_e.no06 = { "letter": "e", "finger": fingers.ring_3, "x": 0.6, "y": 0, "z": 0 };

//             letters.letter_e.no07 = { "letter": "e", "finger": fingers.middle_1, "x": 0.5, "y": 0, "z": 0 };
//             letters.letter_e.no08 = { "letter": "e", "finger": fingers.middle_2, "x": 1.9, "y": 0, "z": 0 };
//             letters.letter_e.no09 = { "letter": "e", "finger": fingers.middle_3, "x": 0.8, "y": 0, "z": 0 };

//             letters.letter_e.no10 = { "letter": "e", "finger": fingers.index_1, "x": 1, "y": 0, "z": 0.3 };
//             letters.letter_e.no11 = { "letter": "e", "finger": fingers.index_2, "x": 1.4, "y": 0, "z": 0.2 };
//             letters.letter_e.no12 = { "letter": "e", "finger": fingers.index_3, "x": 0.7, "y": 0, "z": 0.1 };

//             letters.letter_e.no13 = { "letter": "e", "finger": fingers.thumb_1, "x": 0, "y": -1.5, "z": 0 };
//             letters.letter_e.no14 = { "letter": "e", "finger": fingers.thumb_2, "x": 1, "y": 0.4, "z": 0.3 };
//             letters.letter_e.no15 = { "letter": "e", "finger": fingers.thumb_3, "x": 0, "y": 0.1, "z": 0.9 };

//             letters.letter_e.no16 = { "letter": "e", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 };

//             letters.letter_e.no17 = { "letter": "e", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.03 };
//             letters.letter_e.no18 = { "letter": "e", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.11 };
//             letters.letter_e.no19 = { "letter": "e", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.01 };

//             // ----- F -----

//             letters.letter_f = {};

//             letters.letter_f.no01 = { "letter": "f", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": -0.3 };
//             letters.letter_f.no02 = { "letter": "f", "finger": fingers.pinky_2, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_f.no03 = { "letter": "f", "finger": fingers.pinky_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_f.no04 = { "letter": "f", "finger": fingers.ring_1, "x": 0.1, "y": 0, "z": -0.1 };
//             letters.letter_f.no05 = { "letter": "f", "finger": fingers.ring_2, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_f.no06 = { "letter": "f", "finger": fingers.ring_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_f.no07 = { "letter": "f", "finger": fingers.middle_1, "x": 0.2, "y": 0, "z": 0 };
//             letters.letter_f.no08 = { "letter": "f", "finger": fingers.middle_2, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_f.no09 = { "letter": "f", "finger": fingers.middle_3, "x": 0, "y": 0, "z":0 };

//             letters.letter_f.no10 = { "letter": "f", "finger": fingers.index_1, "x": 0.7, "y": -0.2, "z": 0.2 };
//             letters.letter_f.no11 = { "letter": "f", "finger": fingers.index_2, "x": 1.3, "y": -0.3, "z": 0 };
//             letters.letter_f.no12 = { "letter": "f", "finger": fingers.index_3, "x": 0.2, "y": 0, "z": 0 };

//             letters.letter_f.no13 = { "letter": "f", "finger": fingers.thumb_1, "x": 0.2, "y": -1.1, "z": 0.6 };
//             letters.letter_f.no14 = { "letter": "f", "finger": fingers.thumb_2, "x": 0.2, "y": 0.2, "z": 0 };
//             letters.letter_f.no15 = { "letter": "f", "finger": fingers.thumb_3, "x": 0, "y": 0, "z":0 };

//             letters.letter_f.no16 = { "letter": "f", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 };

//             letters.letter_f.no17 = { "letter": "f", "finger": fingers.palm_1, "x": 0, "y": 0, "z":-0.04 };
//             letters.letter_f.no18 = { "letter": "f", "finger": fingers.palm_2, "x": 0, "y": 0, "z":-0.1 };
//             letters.letter_f.no19 = { "letter": "f", "finger": fingers.palm_3, "x": 0, "y": 0, "z":0.06 };

//             // ----- G -----

//             letters.letter_g = {};

//             letters.letter_g.no01 = { "letter": "g", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": -0.2 };
//             letters.letter_g.no02 = { "letter": "g", "finger": fingers.pinky_2, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_g.no03 = { "letter": "g", "finger": fingers.pinky_3, "x": 0.2, "y": 0, "z": 0 };

//             letters.letter_g.no04 = { "letter": "g", "finger": fingers.ring_1, "x": 0.2, "y": 0, "z": -0.1 };
//             letters.letter_g.no05 = { "letter": "g", "finger": fingers.ring_2, "x": 0.2, "y": 0, "z": 0 };
//             letters.letter_g.no06 = { "letter": "g", "finger": fingers.ring_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_g.no07 = { "letter": "g", "finger": fingers.middle_1, "x": 0.7, "y": 0, "z": 0 };
//             letters.letter_g.no08 = { "letter": "g", "finger": fingers.middle_2, "x": 1.6, "y": 0, "z": 0 };
//             letters.letter_g.no09 = { "letter": "g", "finger": fingers.middle_3, "x": 0.3, "y": 0, "z": 0 };

//             letters.letter_g.no10 = { "letter": "g", "finger": fingers.index_1, "x": 0.1, "y": -0.1, "z": 0.1 };
//             letters.letter_g.no11 = { "letter": "g", "finger": fingers.index_2, "x": 0.1, "y": -0.1, "z": 0 };
//             letters.letter_g.no12 = { "letter": "g", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_g.no13 = { "letter": "g", "finger": fingers.thumb_1, "x": 0.7, "y": -1.3, "z": 1.1 };
//             letters.letter_g.no14 = { "letter": "g", "finger": fingers.thumb_2, "x": 0.2, "y": 0.1, "z": -0.1 };
//             letters.letter_g.no15 = { "letter": "g", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_g.no16 = { "letter": "g", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 };

//             letters.letter_g.no17 = { "letter": "g", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 };
//             letters.letter_g.no18 = { "letter": "g", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.09 };
//             letters.letter_g.no19 = { "letter": "g", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.06 };

//             // ----- H -----

//             letters.letter_h = {};

//             letters.letter_h.no01 = { "letter": "h", "finger": fingers.pinky_1, "x": 0.6, "y": 0.2, "z": -0.4 };
//             letters.letter_h.no02 = { "letter": "h", "finger": fingers.pinky_2, "x": 1.5, "y": 0, "z": -0.6 };
//             letters.letter_h.no03 = { "letter": "h", "finger": fingers.pinky_3, "x": 0.5, "y": 0.2, "z": -0.3 };

//             letters.letter_h.no04 = { "letter": "h", "finger": fingers.ring_1, "x": 0.7, "y": 0.2, "z": -0.2 };
//             letters.letter_h.no05 = { "letter": "h", "finger": fingers.ring_2, "x": 2.2, "y": 0, "z": -0.3 };
//             letters.letter_h.no06 = { "letter": "h", "finger": fingers.ring_3, "x": 0.7, "y": 0, "z": 0 };

//             letters.letter_h.no07 = { "letter": "h", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_h.no08 = { "letter": "h", "finger": fingers.middle_2, "x": 0.2, "y": 0, "z": 0 };
//             letters.letter_h.no09 = { "letter": "h", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_h.no10 = { "letter": "h", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0.1 };
//             letters.letter_h.no11 = { "letter": "h", "finger": fingers.index_2, "x": 0.1, "y": -0.1, "z": 0 };
//             letters.letter_h.no12 = { "letter": "h", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_h.no13 = { "letter": "h", "finger": fingers.thumb_1, "x": 0.6, "y": -0.5, "z": 1.1 };
//             letters.letter_h.no14 = { "letter": "h", "finger": fingers.thumb_2, "x": 0, "y": -0.5, "z": 0.2 };
//             letters.letter_h.no15 = { "letter": "h", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0.2 };

//             letters.letter_h.no16 = { "letter": "h", "finger": fingers.wrist, "x": -0.01, "y": 0, "z": 0 };

//             letters.letter_h.no17 = { "letter": "h", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 };
//             letters.letter_h.no18 = { "letter": "h", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.09 };
//             letters.letter_h.no19 = { "letter": "h", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.07 };

//             // ----- I -----

//             letters.letter_i = {};

//             letters.letter_i.no01 =  { "letter": "i", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": -0.2 };
//             letters.letter_i.no02 =  { "letter": "i", "finger": fingers.pinky_2, "x": 0.2, "y": 0, "z": 0 };
//             letters.letter_i.no03 =  { "letter": "i", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_i.no04 =  { "letter": "i", "finger": fingers.ring_1, "x": 1, "y": 0, "z": -0.1 };
//             letters.letter_i.no05 =  { "letter": "i", "finger": fingers.ring_2, "x": 1.8, "y": -0.1, "z": -0.3 };
//             letters.letter_i.no06 =  { "letter": "i", "finger": fingers.ring_3, "x": 0.5, "y": 0, "z": 0 };

//             letters.letter_i.no07 =  { "letter": "i", "finger": fingers.middle_1, "x": 1, "y": 0, "z": 0 };
//             letters.letter_i.no08 =  { "letter": "i", "finger": fingers.middle_2, "x": 2, "y": 0, "z": 0 };
//             letters.letter_i.no09 =  { "letter": "i", "finger": fingers.middle_3, "x": 0.4, "y": 0, "z": 0 };

//             letters.letter_i.no10 =  { "letter": "i", "finger": fingers.index_1, "x": 1.1, "y": -0.2, "z": 0.2 };
//             letters.letter_i.no11 =  { "letter": "i", "finger": fingers.index_2, "x": 1.7, "y": -0.2, "z": 0 };
//             letters.letter_i.no12 =  { "letter": "i", "finger": fingers.index_3, "x": 0.6, "y": 0, "z": 0 };

//             letters.letter_i.no13 =  { "letter": "i", "finger": fingers.thumb_1, "x": 0.7, "y": -0.5, "z": 0.7 };
//             letters.letter_i.no14 =  { "letter": "i", "finger": fingers.thumb_2, "x": 0.2, "y": -0.1, "z": 0.6 };
//             letters.letter_i.no15 =  { "letter": "i", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0.4 };

//             letters.letter_i.no16 =  { "letter": "i", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 };

//             letters.letter_i.no17 =  { "letter": "i", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 };
//             letters.letter_i.no18 =  { "letter": "i", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.03 };
//             letters.letter_i.no19 =  { "letter": "i", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.06 };

//             // ----- J -----

//             letters.letter_j = {};

//             letters.letter_j.no01 = { "letter": "j", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": 0.2 };
//             letters.letter_j.no02 = { "letter": "j", "finger": fingers.pinky_2, "x": 0.2, "y": 0, "z": 0 };
//             letters.letter_j.no03 = { "letter": "j", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_j.no04 = { "letter": "j", "finger": fingers.ring_1, "x": 1, "y": 0, "z": -0.1 };
//             letters.letter_j.no05 = { "letter": "j", "finger": fingers.ring_2, "x": 1.8, "y": -0.1, "z": -0.3 };
//             letters.letter_j.no06 = { "letter": "j", "finger": fingers.ring_3, "x": 0.5, "y": 0, "z": 0 };

//             letters.letter_j.no07 = { "letter": "j", "finger": fingers.middle_1, "x": 1, "y": 0, "z": 0 };
//             letters.letter_j.no08 = { "letter": "j", "finger": fingers.middle_2, "x": 2, "y": 0, "z": 0 };
//             letters.letter_j.no09 = { "letter": "j", "finger": fingers.middle_3, "x": 0.4, "y": 0, "z": 0 };

//             letters.letter_j.no10 = { "letter": "j", "finger": fingers.index_1, "x": 1.1, "y": -0.2, "z": 0.2 };
//             letters.letter_j.no11 = { "letter": "j", "finger": fingers.index_2, "x": 1.7, "y": -0.2, "z": 0 };
//             letters.letter_j.no12 = { "letter": "j", "finger": fingers.index_3, "x": 0.6, "y": 0, "z": 0 };

//             letters.letter_j.no13 = { "letter": "j", "finger": fingers.thumb_1, "x": 0.7, "y": -0.5, "z": 0.7 };
//             letters.letter_j.no14 = { "letter": "j", "finger": fingers.thumb_2, "x": 0.2, "y": -0.1, "z": 0.6 };
//             letters.letter_j.no15 = { "letter": "j", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0.4 };

//             letters.letter_j.no16 = { "letter": "j", "finger": fingers.wrist, "x": 0, "y": 0.1, "z": 0 };

//             letters.letter_j.no17 = { "letter": "j", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 };
//             letters.letter_j.no18 = { "letter": "j", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.03 };
//             letters.letter_j.no19 = { "letter": "j", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.06 };

//             // // ----- K -----

//             letters.letter_k = {};

//             letters.letter_k.no01 = { "letter": "k", "finger": fingers.pinky_1, "x": 0.9, "y": 0.1, "z": -0.5 };
//             letters.letter_k.no02 = { "letter": "k", "finger": fingers.pinky_2, "x": 1.5, "y": 0.3, "z": -0.6 };
//             letters.letter_k.no03 = { "letter": "k", "finger": fingers.pinky_3, "x": 0.8, "y": 0.2, "z": -0.2 };

//             letters.letter_k.no04 = { "letter": "k", "finger": fingers.ring_1, "x": 1, "y": 0, "z": -0.2 };
//             letters.letter_k.no05 = { "letter": "k", "finger": fingers.ring_2, "x": 2, "y": 0, "z": -0.4 };
//             letters.letter_k.no06 = { "letter": "k", "finger": fingers.ring_3, "x": 0.6, "y": 0, "z": 0 };

//             letters.letter_k.no07 = { "letter": "k", "finger": fingers.middle_1, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_k.no08 = { "letter": "k", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_k.no09 = { "letter": "k", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_k.no10 = { "letter": "k", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_k.no11 = { "letter": "k", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_k.no12 = { "letter": "k", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_k.no13 = { "letter": "k", "finger": fingers.thumb_1, "x": 0, "y": -1.7, "z": 0.5 };
//             letters.letter_k.no14 = { "letter": "k", "finger": fingers.thumb_2, "x": 1.1, "y": 1, "z": -0.2 };
//             letters.letter_k.no15 = { "letter": "k", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.6 };

//             letters.letter_k.no16 = { "letter": "k", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0.2 };

//             letters.letter_k.no17 = { "letter": "k", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_k.no18 = { "letter": "k", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.04 };
//             letters.letter_k.no19 = { "letter": "k", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 };

//             // ----- L -----

//             letters.letter_l = {};

//             letters.letter_l.no01 = { "letter": "l", "finger": fingers.pinky_1, "x": 1, "y": 0, "z": -0.5 };
//             letters.letter_l.no02 = { "letter": "l", "finger": fingers.pinky_2, "x": 1.4, "y": 0, "z": -0.6 };
//             letters.letter_l.no03 = { "letter": "l", "finger": fingers.pinky_3, "x": 0.4, "y": 0.4, "z": -0.2 };

//             letters.letter_l.no04 = { "letter": "l", "finger": fingers.ring_1, "x": 1, "y": 0, "z": -0.2 };
//             letters.letter_l.no05 = { "letter": "l", "finger": fingers.ring_2, "x": 1.8, "y": 0, "z": -0.3 };
//             letters.letter_l.no06 = { "letter": "l", "finger": fingers.ring_3, "x": 0.8, "y": 0, "z": 0 };

//             letters.letter_l.no07 = { "letter": "l", "finger": fingers.middle_1, "x": 1, "y": 0, "z": 0 };
//             letters.letter_l.no08 = { "letter": "l", "finger": fingers.middle_2, "x": 1.9, "y": 0, "z": 0 };
//             letters.letter_l.no09 = { "letter": "l", "finger": fingers.middle_3, "x": 1, "y": 0, "z": 0 };

//             letters.letter_l.no10 = { "letter": "l", "finger": fingers.index_1, "x": 0, "y": 0, "z": 0.1 };
//             letters.letter_l.no11 = { "letter": "l", "finger": fingers.index_2, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_l.no12 = { "letter": "l", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_l.no13 = { "letter": "l", "finger": fingers.thumb_1, "x": 0, "y": -0.7, "z": 0 };
//             letters.letter_l.no14 = { "letter": "l", "finger": fingers.thumb_2, "x": -0.1, "y": 0, "z": -0.3 };
//             letters.letter_l.no15 = { "letter": "l", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.6 };

//             letters.letter_l.no16 = { "letter": "l", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 };

//             letters.letter_l.no17 = { "letter": "l", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_l.no18 = { "letter": "l", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.06 };
//             letters.letter_l.no19 = { "letter": "l", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 };

//             // ----- M -----

//             letters.letter_m = {};

//             letters.letter_m.no01 = { "letter": "m", "finger": fingers.pinky_1, "x": 1.3, "y": 0, "z": -0.5 };
//             letters.letter_m.no02 = { "letter": "m", "finger": fingers.pinky_2, "x": 1.2, "y": 0, "z": -0.4 };
//             letters.letter_m.no03 = { "letter": "m", "finger": fingers.pinky_3, "x": 0.8, "y": 0.4, "z": -0.4 };

//             letters.letter_m.no04 = { "letter": "m", "finger": fingers.ring_1, "x": 1.4, "y": 0, "z": -0.2 };
//             letters.letter_m.no05 = { "letter": "m", "finger": fingers.ring_2, "x": 1.1, "y": 0, "z": -0.1 };
//             letters.letter_m.no06 = { "letter": "m", "finger": fingers.ring_3, "x": 0.2, "y": 0, "z": 0 };

//             letters.letter_m.no07 = { "letter": "m", "finger": fingers.middle_1, "x": 1.3, "y": 0, "z": 0 };
//             letters.letter_m.no08 = { "letter": "m", "finger": fingers.middle_2, "x": 1.2, "y": 0, "z": 0 };
//             letters.letter_m.no09 = { "letter": "m", "finger": fingers.middle_3, "x": 0.2, "y": 0, "z": 0 };

//             letters.letter_m.no10 = { "letter": "m", "finger": fingers.index_1, "x": 1.4, "y": 0, "z": 0.33 };
//             letters.letter_m.no11 = { "letter": "m", "finger": fingers.index_2, "x": 1.1, "y": 0, "z": 0 };
//             letters.letter_m.no12 = { "letter": "m", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_m.no13 = { "letter": "m", "finger": fingers.thumb_1, "x": 0.4, "y": -0.4, "z": 0.9 };
//             letters.letter_m.no14 = { "letter": "m", "finger": fingers.thumb_2, "x": 0.3, "y": 0, "z": 0.5 };
//             letters.letter_m.no15 = { "letter": "m", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 1.2 };

//             letters.letter_m.no16 = { "letter": "m", "finger": fingers.wrist, "x": 0.4, "y": 0, "z": 0 };

//             letters.letter_m.no17 = { "letter": "m", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_m.no18 = { "letter": "m", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.06 };
//             letters.letter_m.no19 = { "letter": "m", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 };

//             // ----- N -----

//             letters.letter_n = {};

//             letters.letter_n.no01 = { "letter": "n", "finger": fingers.pinky_1, "x": 1.3, "y": 0, "z": -0.5 };
//             letters.letter_n.no02 = { "letter": "n", "finger": fingers.pinky_2, "x": 1.2, "y": 0, "z": -0.4 };
//             letters.letter_n.no03 = { "letter": "n", "finger": fingers.pinky_3, "x": 0.8, "y": 0.4, "z": -0.4 };

//             letters.letter_n.no04 = { "letter": "n", "finger": fingers.ring_1, "x": 1.3, "y": 0, "z": -0.2 };
//             letters.letter_n.no05 = { "letter": "n", "finger": fingers.ring_2, "x": 1.6, "y": 0.1, "z": -0.2 };
//             letters.letter_n.no06 = { "letter": "n", "finger": fingers.ring_3, "x": 1, "y": 0.1, "z": -0.1 };

//             letters.letter_n.no07 = { "letter": "n", "finger": fingers.middle_1, "x": 1.3, "y": 0, "z": 0 };
//             letters.letter_n.no08 = { "letter": "n", "finger": fingers.middle_2, "x": 1.2, "y": 0, "z": 0 };
//             letters.letter_n.no09 = { "letter": "n", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_n.no10 = { "letter": "n", "finger": fingers.index_1, "x": 1.4, "y": 0, "z": 0.33 };
//             letters.letter_n.no11 = { "letter": "n", "finger": fingers.index_2, "x": 1.1, "y": 0, "z": 0 };
//             letters.letter_n.no12 = { "letter": "n", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_n.no13 = { "letter": "n", "finger": fingers.thumb_1, "x": 0.4, "y": -0.4, "z": 0.9 };
//             letters.letter_n.no14 = { "letter": "n", "finger": fingers.thumb_2, "x": 0.3, "y": 0, "z": 0.5 };
//             letters.letter_n.no15 = { "letter": "n", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 1.2 };

//             letters.letter_n.no16 = { "letter": "n", "finger": fingers.wrist, "x": 0.4, "y": 0, "z": 0 };

//             letters.letter_n.no17 = { "letter": "n", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_n.no18 = { "letter": "n", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.08 };
//             letters.letter_n.no19 = { "letter": "n", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 };

//             // ----- O -----

//             letters.letter_o = {};

//             letters.letter_o.no01 = { "letter": "o", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": -0.3 };
//             letters.letter_o.no02 = { "letter": "o", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_o.no03 = { "letter": "o", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_o.no04 = { "letter": "o", "finger": fingers.ring_1, "x": 0, "y": 0, "z": -0.1 };
//             letters.letter_o.no05 = { "letter": "o", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_o.no06 = { "letter": "o", "finger": fingers.ring_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_o.no07 = { "letter": "o", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_o.no08 = { "letter": "o", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_o.no09 = { "letter": "o", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_o.no10 = { "letter": "o", "finger": fingers.index_1, "x": 0.7, "y": 0, "z": 0.1 };
//             letters.letter_o.no11 = { "letter": "o", "finger": fingers.index_2, "x": 1.3, "y": -0.3, "z": 0 };
//             letters.letter_o.no12 = { "letter": "o", "finger": fingers.index_3, "x": 0.6, "y": 0, "z": 0 };

//             letters.letter_o.no13 = { "letter": "o", "finger": fingers.thumb_1, "x": 0.5, "y": -0.8, "z": 0.5 };
//             letters.letter_o.no14 = { "letter": "o", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_o.no15 = { "letter": "o", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0.5 };

//             letters.letter_o.no16 = { "letter": "o", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 };

//             letters.letter_o.no17 = { "letter": "o", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 };
//             letters.letter_o.no18 = { "letter": "o", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 };
//             letters.letter_o.no19 = { "letter": "o", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.05 };

//             // ----- Q -----

//             letters.letter_q = {};

//             letters.letter_q.no01 = { "letter": "q", "finger": fingers.pinky_1, "x": 1.2, "y": 0, "z": -0.4 };
//             letters.letter_q.no02 = { "letter": "q", "finger": fingers.pinky_2, "x": 1.3, "y": 0, "z": -0.4 };
//             letters.letter_q.no03 = { "letter": "q", "finger": fingers.pinky_3, "x": 0.9, "y": 0.4, "z": -0.5 };

//             letters.letter_q.no04 = { "letter": "q", "finger": fingers.ring_1, "x": 1.3, "y": 0, "z": -0.1 };
//             letters.letter_q.no05 = { "letter": "q", "finger": fingers.ring_2, "x": 1.7, "y": 0, "z": -0.2 };
//             letters.letter_q.no06 = { "letter": "q", "finger": fingers.ring_3, "x": 0.6, "y": 0.2, "z": -0.1 };

//             letters.letter_q.no07 = { "letter": "q", "finger": fingers.middle_1, "x": 1.4, "y": 0, "z": 0 };
//             letters.letter_q.no08 = { "letter": "q", "finger": fingers.middle_2, "x": 1.7, "y": 0, "z": 0 };
//             letters.letter_q.no09 = { "letter": "q", "finger": fingers.middle_3, "x": 0.6, "y": 0, "z": 0 };

//             letters.letter_q.no10 = { "letter": "q", "finger": fingers.index_1, "x": 1.3, "y": 0, "z": 0.1 };
//             letters.letter_q.no11 = { "letter": "q", "finger": fingers.index_2, "x": 0, "y": -0.3, "z": 0 };
//             letters.letter_q.no12 = { "letter": "q", "finger": fingers.index_3, "x": -0.1, "y": 0, "z": 0 };

//             letters.letter_q.no13 = { "letter": "q", "finger": fingers.thumb_1, "x": 0.5, "y": -1.4, "z": 0.5 };
//             letters.letter_q.no14 = { "letter": "q", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": -0.2 };
//             letters.letter_q.no15 = { "letter": "q", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.6 };

//             letters.letter_q.no16 = { "letter": "q", "finger": fingers.wrist, "x": 1.3, "y": -0.1, "z": 0.6 };

//             letters.letter_q.no17 = { "letter": "q", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.04 };
//             letters.letter_q.no18 = { "letter": "q", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 };
//             letters.letter_q.no19 = { "letter": "q", "finger": fingers.palm_3, "x": 0, "y": 0, "z": -0.05 };

//             // ----- P -----

//             letters.letter_p = {};

//             letters.letter_p.no01 = { "letter": "p", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": -0.2 };
//             letters.letter_p.no02 = { "letter": "p", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_p.no03 = { "letter": "p", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_p.no04 = { "letter": "p", "finger": fingers.ring_1, "x": 0.1, "y": 0, "z": -0.1 };
//             letters.letter_p.no05 = { "letter": "p", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_p.no06 = { "letter": "p", "finger": fingers.ring_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_p.no07 = { "letter": "p", "finger": fingers.middle_1, "x": 1.1, "y": 0, "z": -0.1 };
//             letters.letter_p.no08 = { "letter": "p", "finger": fingers.middle_2, "x": 0.6, "y": 0, "z": 0 };
//             letters.letter_p.no09 = { "letter": "p", "finger": fingers.middle_3, "x": 0.2, "y": 0, "z": 0 };

//             letters.letter_p.no10 = { "letter": "p", "finger": fingers.index_1, "x": 0, "y": 0, "z": 0.1 };
//             letters.letter_p.no11 = { "letter": "p", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_p.no12 = { "letter": "p", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_p.no13 = { "letter": "p", "finger": fingers.thumb_1, "x": -0.2, "y": -1.7, "z": 0.1 };
//             letters.letter_p.no14 = { "letter": "p", "finger": fingers.thumb_2, "x": 0.5, "y": 0.1, "z": -0.1 };
//             letters.letter_p.no15 = { "letter": "p", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.5 };

//             letters.letter_p.no16 = { "letter": "p", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 };

//             letters.letter_p.no17 = { "letter": "p", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_p.no18 = { "letter": "p", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.05 };
//             letters.letter_p.no19 = { "letter": "p", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.05 };

//             // ----- R -----

//             letters.letter_r = {};

//             letters.letter_r.no01 = { "letter": "r", "finger": fingers.pinky_1, "x": 1.1, "y": 0, "z": -0.4 };
//             letters.letter_r.no02 = { "letter": "r", "finger": fingers.pinky_2, "x": 1.4, "y": 0, "z": -0.6 };
//             letters.letter_r.no03 = { "letter": "r", "finger": fingers.pinky_3, "x": 0.3, "y": 0.3, "z": -0.1 };

//             letters.letter_r.no04 = { "letter": "r", "finger": fingers.ring_1, "x": 1.1, "y": 0, "z": 0 };
//             letters.letter_r.no05 = { "letter": "r", "finger": fingers.ring_2, "x": 2, "y": 0, "z": -0.3 };
//             letters.letter_r.no06 = { "letter": "r", "finger": fingers.ring_3, "x": 0.4, "y": 0, "z": 0 };

//             letters.letter_r.no07 = { "letter": "r", "finger": fingers.middle_1, "x": -0.2, "y": 0, "z": -0.2 };
//             letters.letter_r.no08 = { "letter": "r", "finger": fingers.middle_2, "x": 0.4, "y": 0, "z": 0 };
//             letters.letter_r.no09 = { "letter": "r", "finger": fingers.middle_3, "x": 0.2, "y": 0, "z": 0 };

//             letters.letter_r.no10 = { "letter": "r", "finger": fingers.index_1, "x": 0.2, "y": 0, "z": 0.3 };
//             letters.letter_r.no11 = { "letter": "r", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_r.no12 = { "letter": "r", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_r.no13 = { "letter": "r", "finger": fingers.thumb_1, "x": 0, "y": -1.8, "z": 0.2 };
//             letters.letter_r.no14 = { "letter": "r", "finger": fingers.thumb_2, "x": 0.9, "y": 0.3, "z": 0.1 };
//             letters.letter_r.no15 = { "letter": "r", "finger": fingers.thumb_3, "x": 0.4, "y": 0.2, "z": 0 };

//             letters.letter_r.no16 = { "letter": "r", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 };

//             letters.letter_r.no17 = { "letter": "r", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.09 };
//             letters.letter_r.no18 = { "letter": "r", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 };
//             letters.letter_r.no19 = { "letter": "r", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.02 };

//             // ----- S -----

//             letters.letter_s = {};

//             letters.letter_s.no01 = { "letter": "s", "finger": fingers.pinky_1, "x": 1.1, "y": 0, "z": -0.4 };
//             letters.letter_s.no02 = { "letter": "s", "finger": fingers.pinky_2, "x": 1.4, "y": 0, "z": -0.6 };
//             letters.letter_s.no03 = { "letter": "s", "finger": fingers.pinky_3, "x": 0.3, "y": 0.3, "z": -0.1 };

//             letters.letter_s.no04 = { "letter": "s", "finger": fingers.ring_1, "x": 1.1, "y": 0, "z": 0 };
//             letters.letter_s.no05 = { "letter": "s", "finger": fingers.ring_2, "x": 2, "y": 0, "z": -0.3 };
//             letters.letter_s.no06 = { "letter": "s", "finger": fingers.ring_3, "x": 0.4, "y": 0, "z": 0 };

//             letters.letter_s.no07 = { "letter": "s", "finger": fingers.middle_1, "x": 1, "y": 0, "z": 0 };
//             letters.letter_s.no08 = { "letter": "s", "finger": fingers.middle_2, "x": 2.1, "y": 0, "z": 0 };
//             letters.letter_s.no09 = { "letter": "s", "finger": fingers.middle_3, "x": 0.5, "y": 0, "z": 0 };

//             letters.letter_s.no10 = { "letter": "s", "finger": fingers.index_1, "x": 0, "y": 0, "z": 0.1 };
//             letters.letter_s.no11 = { "letter": "s", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_s.no12 = { "letter": "s", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_s.no13 = { "letter": "s", "finger": fingers.thumb_1, "x": 0.1, "y": -1.7, "z": 0.3 };
//             letters.letter_s.no14 = { "letter": "s", "finger": fingers.thumb_2, "x": 0.9, "y": 0.3, "z": 0.1 };
//             letters.letter_s.no15 = { "letter": "s", "finger": fingers.thumb_3, "x": 0.5, "y": 0, "z": 0.2 };

//             letters.letter_s.no16 = { "letter": "s", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 };

//             letters.letter_s.no17 = { "letter": "s", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.09 };
//             letters.letter_s.no18 = { "letter": "s", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 };
//             letters.letter_s.no19 = { "letter": "s", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.02 };


//             // // ----- T -----

//             // // ----- U -----

//             // // ----- V -----

//             // // ----- W -----

//             // // ----- X -----

//             // // ----- Y -----

//             // // ----- Z -----

//             // // ----- Þ -----

//             // // ----- Æ -----

//             // // ----- Ö -----


//             // ----- NUMBERS -----

//             // ----- 1 -----

//             letters.letter_nr01 = {};

//             letters.letter_nr01.no01 = { "letter": "1", "finger": fingers.pinky_1, "x": 1.1, "y": 0, "z": -0.4 };
//             letters.letter_nr01.no02 = { "letter": "1", "finger": fingers.pinky_2, "x": 1.4, "y": 0, "z": -0.6 };
//             letters.letter_nr01.no03 = { "letter": "1", "finger": fingers.pinky_3, "x": 0.3, "y": 0.3, "z": -0.1 };

//             letters.letter_nr01.no04 = { "letter": "1", "finger": fingers.ring_1, "x": 1.1, "y": 0, "z": 0 };
//             letters.letter_nr01.no05 = { "letter": "1", "finger": fingers.ring_2, "x": 2, "y": 0, "z": -0.3 };
//             letters.letter_nr01.no06 = { "letter": "1", "finger": fingers.ring_3, "x": 0.4, "y": 0, "z": 0 };

//             letters.letter_nr01.no07 = { "letter": "1", "finger": fingers.middle_1, "x": 1, "y": 0, "z": 0 };
//             letters.letter_nr01.no08 = { "letter": "1", "finger": fingers.middle_2, "x": 2.1, "y": 0, "z": 0 };
//             letters.letter_nr01.no09 = { "letter": "1", "finger": fingers.middle_3, "x": 0.5, "y": 0, "z": 0 };

//             letters.letter_nr01.no10 = { "letter": "1", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0.1 };
//             letters.letter_nr01.no11 = { "letter": "1", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr01.no12 = { "letter": "1", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr01.no13 = { "letter": "1", "finger": fingers.thumb_1, "x": 0.1, "y": -1.7, "z": 0.3 };
//             letters.letter_nr01.no14 = { "letter": "1", "finger": fingers.thumb_2, "x": 0.7, "y": 0.3, "z": 0.1 };
//             letters.letter_nr01.no15 = { "letter": "1", "finger": fingers.thumb_3, "x": 0.1, "y": 0, "z": 0.1 };

//             letters.letter_nr01.no16 = { "letter": "1", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 };

//             letters.letter_nr01.no17 = { "letter": "1", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.09 };
//             letters.letter_nr01.no18 = { "letter": "1", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 };
//             letters.letter_nr01.no19 = { "letter": "1", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.02 };

//             // ----- 2 -----

//             letters.letter_nr02 = {};

//             letters.letter_nr02.no01 = { "letter": "2", "finger": fingers.pinky_1, "x": 1.1, "y": 0, "z": -0.4 };
//             letters.letter_nr02.no02 = { "letter": "2", "finger": fingers.pinky_2, "x": 1.4, "y": 0, "z": -0.6 };
//             letters.letter_nr02.no03 = { "letter": "2", "finger": fingers.pinky_3, "x": 0.3, "y": 0.3, "z": -0.1 };

//             letters.letter_nr02.no04 = { "letter": "2", "finger": fingers.ring_1, "x": 1.1, "y": 0, "z": 0 };
//             letters.letter_nr02.no05 = { "letter": "2", "finger": fingers.ring_2, "x": 2, "y": 0, "z": -0.3 };
//             letters.letter_nr02.no06 = { "letter": "2", "finger": fingers.ring_3, "x": 0.4, "y": 0, "z": 0 };

//             letters.letter_nr02.no07 = { "letter": "2", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0.1 };
//             letters.letter_nr02.no08 = { "letter": "2", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr02.no09 = { "letter": "2", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_nr02.no10 = { "letter": "2", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_nr02.no11 = { "letter": "2", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr02.no12 = { "letter": "2", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_nr02.no13 = { "letter": "2", "finger": fingers.thumb_1, "x": 0.1, "y": -1.8, "z": 0.3 };
//             letters.letter_nr02.no14 = { "letter": "2", "finger": fingers.thumb_2, "x": 0.9, "y": 0.1, "z": 0 };
//             letters.letter_nr02.no15 = { "letter": "2", "finger": fingers.thumb_3, "x": 0.2, "y": 0, "z": 0.3 };

//             letters.letter_nr02.no16 = { "letter": "2", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 };

//             letters.letter_nr02.no17 = { "letter": "2", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.09 };
//             letters.letter_nr02.no18 = { "letter": "2", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 };
//             letters.letter_nr02.no19 = { "letter": "2", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.02 };

//             // ----- 3 -----

//             letters.letter_nr03 = {};

//             letters.letter_nr03.no01 = { "letter": "3", "finger": fingers.pinky_1, "x": 1.1, "y": 0, "z": -0.4 };
//             letters.letter_nr03.no02 = { "letter": "3", "finger": fingers.pinky_2, "x": 1.4, "y": 0, "z": -0.6 };
//             letters.letter_nr03.no03 = { "letter": "3", "finger": fingers.pinky_3, "x": 0.3, "y": 0.3, "z": -0.1 };

//             letters.letter_nr03.no04 = { "letter": "3", "finger": fingers.ring_1, "x": 1.1, "y": 0, "z": 0 };
//             letters.letter_nr03.no05 = { "letter": "3", "finger": fingers.ring_2, "x": 2, "y": 0, "z": -0.3 };
//             letters.letter_nr03.no06 = { "letter": "3", "finger": fingers.ring_3, "x": 0.4, "y": 0, "z": 0 };

//             letters.letter_nr03.no07 = { "letter": "3", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0.1 };
//             letters.letter_nr03.no08 = { "letter": "3", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr03.no09 = { "letter": "3", "finger": fingers.middle_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_nr03.no10 = { "letter": "3", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_nr03.no11 = { "letter": "3", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr03.no12 = { "letter": "3", "finger": fingers.index_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_nr03.no13 = { "letter": "3", "finger": fingers.thumb_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr03.no14 = { "letter": "3", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr03.no15 = { "letter": "3", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.5 };

//             letters.letter_nr03.no16 = { "letter": "3", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 };

//             letters.letter_nr03.no17 = { "letter": "3", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.09 };
//             letters.letter_nr03.no18 = { "letter": "3", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.1 };
//             letters.letter_nr03.no19 = { "letter": "3", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 };

//             // ----- 4 -----

//             letters.letter_nr04 = {};

//             letters.letter_nr04.no01 = { "letter": "4", "finger": fingers.pinky_1, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_nr04.no02 = { "letter": "4", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr04.no03 = { "letter": "4", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr04.no04 = { "letter": "4", "finger": fingers.ring_1, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_nr04.no05 = { "letter": "4", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr04.no06 = { "letter": "4", "finger": fingers.ring_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr04.no07 = { "letter": "4", "finger": fingers.middle_1, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_nr04.no08 = { "letter": "4", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr04.no09 = { "letter": "4", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr04.no10 = { "letter": "4", "finger": fingers.index_1, "x": 0.2, "y": 0, "z": 0 };
//             letters.letter_nr04.no11 = { "letter": "4", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr04.no12 = { "letter": "4", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr04.no13 = { "letter": "4", "finger": fingers.thumb_1, "x": 0.1, "y": -1.9, "z": 0.5 };
//             letters.letter_nr04.no14 = { "letter": "4", "finger": fingers.thumb_2, "x": 1.1, "y": 0.7, "z": 0 };
//             letters.letter_nr04.no15 = { "letter": "4", "finger": fingers.thumb_3, "x": 0.2, "y": 0, "z": 0.7 };

//             letters.letter_nr04.no16 = { "letter": "4", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 };

//             letters.letter_nr04.no17 = { "letter": "4", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr04.no18 = { "letter": "4", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr04.no19 = { "letter": "4", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 };

//             // ----- 5 -----

//             letters.letter_nr05 = {};

//             letters.letter_nr05.no01 = { "letter": "5", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": 0.1 };
//             letters.letter_nr05.no02 = { "letter": "5", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr05.no03 = { "letter": "5", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr05.no04 = { "letter": "5", "finger": fingers.ring_1, "x": 0, "y": 0, "z": 0.1 };
//             letters.letter_nr05.no05 = { "letter": "5", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr05.no06 = { "letter": "5", "finger": fingers.ring_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr05.no07 = { "letter": "5", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr05.no08 = { "letter": "5", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr05.no09 = { "letter": "5", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr05.no10 = { "letter": "5", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": -0.1 };
//             letters.letter_nr05.no11 = { "letter": "5", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr05.no12 = { "letter": "5", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr05.no13 = { "letter": "5", "finger": fingers.thumb_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr05.no14 = { "letter": "5", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr05.no15 = { "letter": "5", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.5 };

//             letters.letter_nr05.no16 = { "letter": "5", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 };

//             letters.letter_nr05.no17 = { "letter": "5", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr05.no18 = { "letter": "5", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr05.no19 = { "letter": "5", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 };

//             // ----- 6 -----

//             letters.letter_nr06 = {};

//             letters.letter_nr06.no01 = { "letter": "6", "finger": fingers.pinky_1, "x": 0.8, "y": 0.1, "z": -0.5 };
//             letters.letter_nr06.no02 = { "letter": "6", "finger": fingers.pinky_2, "x": 1.5, "y": 0.1, "z": -0.7 };
//             letters.letter_nr06.no03 = { "letter": "6", "finger": fingers.pinky_3, "x": 0.6, "y": 0.3, "z": -0.2 };

//             letters.letter_nr06.no04 = { "letter": "6", "finger": fingers.ring_1, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_nr06.no05 = { "letter": "6", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr06.no06 = { "letter": "6", "finger": fingers.ring_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr06.no07 = { "letter": "6", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr06.no08 = { "letter": "6", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr06.no09 = { "letter": "6", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr06.no10 = { "letter": "6", "finger": fingers.index_1, "x": 0.2, "y": 0, "z": 0 };
//             letters.letter_nr06.no11 = { "letter": "6", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr06.no12 = { "letter": "6", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr06.no13 = { "letter": "6", "finger": fingers.thumb_1, "x": 0.1, "y": -2.3, "z": 0.2 };
//             letters.letter_nr06.no14 = { "letter": "6", "finger": fingers.thumb_2, "x": 1.1, "y": 0.4, "z": 0 };
//             letters.letter_nr06.no15 = { "letter": "6", "finger": fingers.thumb_3, "x": 0.2, "y": 0, "z": 0 };

//             letters.letter_nr06.no16 = { "letter": "6", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 };

//             letters.letter_nr06.no17 = { "letter": "6", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr06.no18 = { "letter": "6", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr06.no19 = { "letter": "6", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 };

//             // ----- 7 -----

//             letters.letter_nr07 = {};

//             letters.letter_nr07.no01 = { "letter": "7", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr07.no02 = { "letter": "7", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr07.no03 = { "letter": "7", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr07.no04 = { "letter": "7", "finger": fingers.ring_1, "x": 1.1, "y": 0, "z": -0.1 };
//             letters.letter_nr07.no05 = { "letter": "7", "finger": fingers.ring_2, "x": 1.9, "y": 0, "z": -0.4 };
//             letters.letter_nr07.no06 = { "letter": "7", "finger": fingers.ring_3, "x": 0.5, "y": 0, "z": 0 };

//             letters.letter_nr07.no07 = { "letter": "7", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr07.no08 = { "letter": "7", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr07.no09 = { "letter": "7", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr07.no10 = { "letter": "7", "finger": fingers.index_1, "x": 0.2, "y": 0, "z": 0 };
//             letters.letter_nr07.no11 = { "letter": "7", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr07.no12 = { "letter": "7", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr07.no13 = { "letter": "7", "finger": fingers.thumb_1, "x": 0.1, "y": -1.9, "z": 0.1 };
//             letters.letter_nr07.no14 = { "letter": "7", "finger": fingers.thumb_2, "x": 0.9, "y": 0.4, "z": 0.2 };
//             letters.letter_nr07.no15 = { "letter": "7", "finger": fingers.thumb_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_nr07.no16 = { "letter": "7", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 };

//             letters.letter_nr07.no17 = { "letter": "7", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr07.no18 = { "letter": "7", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr07.no19 = { "letter": "7", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 };

//             // ----- 8 -----

//             letters.letter_nr08 = {};

//             letters.letter_nr08.no01 = { "letter": "8", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr08.no02 = { "letter": "8", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr08.no03 = { "letter": "8", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr08.no04 = { "letter": "8", "finger": fingers.ring_1, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_nr08.no05 = { "letter": "8", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr08.no06 = { "letter": "8", "finger": fingers.ring_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr08.no07 = { "letter": "8", "finger": fingers.middle_1, "x": 0.9, "y": 0, "z": 0 };
//             letters.letter_nr08.no08 = { "letter": "8", "finger": fingers.middle_2, "x": 2, "y": 0, "z": 0 };
//             letters.letter_nr08.no09 = { "letter": "8", "finger": fingers.middle_3, "x": 0.7, "y": 0, "z": 0 };

//             letters.letter_nr08.no10 = { "letter": "8", "finger": fingers.index_1, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_nr08.no11 = { "letter": "8", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr08.no12 = { "letter": "8", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr08.no13 = { "letter": "8", "finger": fingers.thumb_1, "x": 0.1, "y": -1.7, "z": 0.2 };
//             letters.letter_nr08.no14 = { "letter": "8", "finger": fingers.thumb_2, "x": 0.6, "y": 0.4, "z": 0.2 };
//             letters.letter_nr08.no15 = { "letter": "8", "finger": fingers.thumb_3, "x": 0.1, "y": 0, "z": 0 };

//             letters.letter_nr08.no16 = { "letter": "8", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 };

//             letters.letter_nr08.no17 = { "letter": "8", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr08.no18 = { "letter": "8", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr08.no19 = { "letter": "8", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 };

//             // ----- 9 -----

//             letters.letter_nr09 = {};

//             letters.letter_nr09.no01 = { "letter": "9", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr09.no02 = { "letter": "9", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr09.no03 = { "letter": "9", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr09.no04 = { "letter": "9", "finger": fingers.ring_1, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_nr09.no05 = { "letter": "9", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr09.no06 = { "letter": "9", "finger": fingers.ring_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr09.no07 = { "letter": "9", "finger": fingers.middle_1, "x": 0.2, "y": 0, "z": 0 };
//             letters.letter_nr09.no08 = { "letter": "9", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr09.no09 = { "letter": "9", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_nr09.no10 = { "letter": "9", "finger": fingers.index_1, "x": 0.9, "y": 0, "z": 0.2 };
//             letters.letter_nr09.no11 = { "letter": "9", "finger": fingers.index_2, "x": 2, "y": 0, "z": 0.2 };
//             letters.letter_nr09.no12 = { "letter": "9", "finger": fingers.index_3, "x": 0.3, "y": 0, "z": 0 };

//             letters.letter_nr09.no13 = { "letter": "9", "finger": fingers.thumb_1, "x": 0.1, "y": -0.8, "z": 0.3 };
//             letters.letter_nr09.no14 = { "letter": "9", "finger": fingers.thumb_2, "x": 0.4, "y": -0.2, "z": 0.2 };
//             letters.letter_nr09.no15 = { "letter": "9", "finger": fingers.thumb_3, "x": 0, "y": -0.3, "z": 0.5 };

//             letters.letter_nr09.no16 = { "letter": "9", "finger": fingers.wrist, "x": -0.1, "y": 0, "z": 0 };

//             letters.letter_nr09.no17 = { "letter": "9", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr09.no18 = { "letter": "9", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr09.no19 = { "letter": "9", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 };

//             // ----- 10 -----

//             letters.letter_nr10 = {};

//             letters.letter_nr10.no01 = { "letter": "°", "finger": fingers.pinky_1, "x": 1.2, "y": 0.2, "z": -0.4 };
//             letters.letter_nr10.no02 = { "letter": "°", "finger": fingers.pinky_2, "x": 1.3, "y": 0, "z": -0.2 };
//             letters.letter_nr10.no03 = { "letter": "°", "finger": fingers.pinky_3, "x": 1, "y": 0.3, "z": -0.5 };

//             letters.letter_nr10.no04 = { "letter": "°", "finger": fingers.ring_1, "x": 1.2, "y": 0, "z": -0.1 };
//             letters.letter_nr10.no05 = { "letter": "°", "finger": fingers.ring_2, "x": 1.6, "y": 0.1, "z": -0.2 };
//             letters.letter_nr10.no06 = { "letter": "°", "finger": fingers.ring_3, "x": 1.3, "y": 0, "z": -0.1 };

//             letters.letter_nr10.no07 = { "letter": "°", "finger": fingers.middle_1, "x": 1.2, "y": 0, "z": 0 };
//             letters.letter_nr10.no08 = { "letter": "°", "finger": fingers.middle_2, "x": 1.6, "y": 0, "z": 0 };
//             letters.letter_nr10.no09 = { "letter": "°", "finger": fingers.middle_3, "x": 1.4, "y": 0, "z": 0 };

//             letters.letter_nr10.no10 = { "letter": "°", "finger": fingers.index_1, "x": 1.3, "y": -0.1, "z": 0.2 };
//             letters.letter_nr10.no11 = { "letter": "°", "finger": fingers.index_2, "x": 1.8, "y": -0.2, "z": 0.2 };
//             letters.letter_nr10.no12 = { "letter": "°", "finger": fingers.index_3, "x": 0.7, "y": 0, "z": 0 };

//             letters.letter_nr10.no13 = { "letter": "°", "finger": fingers.thumb_1, "x": 0.1, "y": -0.2, "z": 0 };
//             letters.letter_nr10.no14 = { "letter": "°", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_nr10.no15 = { "letter": "°", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": -0.5 };

//             letters.letter_nr10.no16 = { "letter": "°", "finger": fingers.wrist, "x": 0, "y": 0.2, "z": 0.5 };

//             letters.letter_nr10.no17 = { "letter": "°", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.07 };
//             letters.letter_nr10.no18 = { "letter": "°", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.12 };
//             letters.letter_nr10.no19 = { "letter": "°", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.06 };

//             // ----- SPACE -----

//             letters.letter_space = {};

//             letters.letter_space.no01 = { "letter": " ", "finger": fingers.pinky_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_space.no02 = { "letter": " ", "finger": fingers.pinky_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_space.no03 = { "letter": " ", "finger": fingers.pinky_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_space.no04 = { "letter": " ", "finger": fingers.ring_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_space.no05 = { "letter": " ", "finger": fingers.ring_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_space.no06 = { "letter": " ", "finger": fingers.ring_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_space.no07 = { "letter": " ", "finger": fingers.middle_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_space.no08 = { "letter": " ", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_space.no09 = { "letter": " ", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_space.no10 = { "letter": " ", "finger": fingers.index_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_space.no11 = { "letter": " ", "finger": fingers.index_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_space.no12 = { "letter": " ", "finger": fingers.index_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_space.no13 = { "letter": " ", "finger": fingers.thumb_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_space.no14 = { "letter": " ", "finger": fingers.thumb_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_space.no15 = { "letter": " ", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_space.no16 = { "letter": " ", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 };

//             letters.letter_space.no17 = { "letter": " ", "finger": fingers.palm_1, "x": 0, "y": 0, "z": 0 };
//             letters.letter_space.no18 = { "letter": " ", "finger": fingers.palm_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_space.no19 = { "letter": " ", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0 };

//             // // //console.log(letters.letter_space.no01);

//             letters.letter_special = {};

//             letters.letter_special.no01 = { "letter": "*", "finger": fingers.pinky_1, "x": 0.5, "y": 0, "z": -0.3 };
//             letters.letter_special.no02 = { "letter": "*", "finger": fingers.pinky_2, "x": 1.8, "y": 0.1, "z": -0.9 };
//             letters.letter_special.no03 = { "letter": "*", "finger": fingers.pinky_3, "x": 0.6, "y": 0.2, "z": 0 };

//             letters.letter_special.no04 = { "letter": "*", "finger": fingers.ring_1, "x": 0.7, "y": 0.2, "z": -0.2 };
//             letters.letter_special.no05 = { "letter": "*", "finger": fingers.ring_2, "x": 2.1, "y": 0, "z": -0.3 };
//             letters.letter_special.no06 = { "letter": "*", "finger": fingers.ring_3, "x": 0.6, "y": 0, "z": 0 };

//             letters.letter_special.no07 = { "letter": "*", "finger": fingers.middle_1, "x": 0.1, "y": 0, "z": 0 };
//             letters.letter_special.no08 = { "letter": "*", "finger": fingers.middle_2, "x": 0, "y": 0, "z": 0 };
//             letters.letter_special.no09 = { "letter": "*", "finger": fingers.middle_3, "x": 0, "y": 0, "z": 0 };

//             letters.letter_special.no10 = { "letter": "*", "finger": fingers.index_1, "x": 0.8, "y": -0.1, "z": 0.1 };
//             letters.letter_special.no11 = { "letter": "*", "finger": fingers.index_2, "x": 2, "y": 0, "z": 0.2 };
//             letters.letter_special.no12 = { "letter": "*", "finger": fingers.index_3, "x": 0.7, "y": 0, "z": 0.1 };

//             letters.letter_special.no13 = { "letter": "*", "finger": fingers.thumb_1, "x": 0.1, "y": -0.5, "z": 0.4 };
//             letters.letter_special.no14 = { "letter": "*", "finger": fingers.thumb_2, "x": 0.8, "y": 0.3, "z": 0 };
//             letters.letter_special.no15 = { "letter": "*", "finger": fingers.thumb_3, "x": 0, "y": 0, "z": 0.7 };

//             letters.letter_special.no16 = { "letter": "*", "finger": fingers.wrist, "x": 0, "y": 0, "z": 0 };

//             letters.letter_special.no17 = { "letter": "*", "finger": fingers.palm_1, "x": 0, "y": 0, "z": -0.03 };
//             letters.letter_special.no18 = { "letter": "*", "finger": fingers.palm_2, "x": 0, "y": 0, "z": -0.11 };
//             letters.letter_special.no19 = { "letter": "*", "finger": fingers.palm_3, "x": 0, "y": 0, "z": 0.07 };

//             return letters;

// }

