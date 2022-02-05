import React from "react"
import { Path, Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { Vector} from '../../../../core/vector/index'

const styles = {
    position: "absolute",
    maxHeight: "50%",
  }

export const Background = () => (
 
  <Vector
    eStyle={styles}
    height="100%" 
    width="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"    
  >
    <Defs>
      <LinearGradient id="a" x1="98%" y1="100%" x2="2%" y2="0%">
        <Stop
          offset="1.1%"
          style={{
            stopColor: "#2a14f6",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="98.47%"
          style={{
            stopColor: "#e409f9",
            stopOpacity: 1,
          }}
        />
      </LinearGradient>
    </Defs>
    <Rect width="100%" height="100%" fill="url(#a)" />
  </Vector>

)
