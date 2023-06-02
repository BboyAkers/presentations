//Composables
import { makeElevationProps, useElevation } from "@/composables/elevation";
import { makeBorderProps, useBorder } from "@/composables/border";

// Utilities
import { genericComponent, propsFactory, useRender } from "@/util";

export type VBasicComponentSlots = {
  default: [];
  text: [];
};

export const makeVBasicComponentProps = propsFactory(
  {
    text: String,

    ...makeElevationProps(),
    ...makeBorderProps(),
  },
  "v-basic-component"
);

export const VBasicComponent = genericComponent<VBasicComponentSlots>()({
  name: "VBasicComponent",

  props: makeVBasicComponentProps(),

  setup(props, { slots }) {
    const { elevationClasses } = useElevation(props);
    const { borderClasses } = useBorder(props);

    useRender(() => {
      const hasText = !!(props.text || slots.text);

      return (
        <div class={[elevationClasses.value, borderClasses.value]}>
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
