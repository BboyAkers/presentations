// Components

// Composables
import { makeElevationProps, useElevation } from "@/composables/elevation";

// Utilities
import { genericComponent, propsFactory, useRender } from "@/util";
// Types
export type VBasicComponentSlots = {
  default: [];
  text: [];
};
// Our Component

export const makeVBasicComponentProps = propsFactory(
  {
    text: String,
    
    ...makeElevationProps(),
  }, "v-basic-component"
)

export const VBasicComponent = genericComponent<VBasicComponentSlots>()({
  name: "VBasicComponent",

  props: makeVBasicComponentProps(),

  setup(props, { slots }){
    
    const { elevationClasses } = useElevation(props);
    
    useRender(() => {
      const hasText = !!(props.text || slots.text);
      
      return (
        <div class={[elevationClasses.value]}>
          {hasText ? (
            <div>{slots.text?.() ?? props.text}</div>
          ) : (
            <div>{slots.default?.()}</div>
          )}       
        </div>
      );
    });
  },
});


export type VBasicComponent = InstanceType<typeof VBasicComponent>;
