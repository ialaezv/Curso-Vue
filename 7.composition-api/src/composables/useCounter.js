// Imports
import { ref } from 'vue'

const useCounter = ( initValue = 0 ) => {
    // Var
    const counter = ref(initValue)

    // Retornar Var o Methods  
    return {
         //Variables
        counter,
     
        //Methods
        increase: () => counter.value++,
        decrease: () => counter.value--,
     }
}

export default useCounter