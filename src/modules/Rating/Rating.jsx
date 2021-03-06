import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiRating',
  binding: {
    prop: 'rating',
    event: 'changed',
  },
  props: {
    icon: String,
    maxRating: Number,
    rating: Number,
  },
  data() {
    return {
      selected: 0,
    };
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.icon,
          'rating',
        )}
        role="radiogroup"
      >
        {[...new Array(this.maxRating)].map((v, i) => {
          const elementValue = i + 1;
          const active = this.rating > i;
          const selected = this.selected > i;
          return (
            <i
              aria-checked={active.toString()}
              aria-posinset={elementValue}
              aria-setsize={this.maxRating}
              class={classes(active && 'active', selected && 'selected', 'icon')}
              tabindex="0"
              role="radio"
              onMouseover={() => {
                this.selected = elementValue;
              }}
              onMouseleave={() => {
                this.selected = 0;
              }}
            />
          );
        })}
      </ElementType>
    );
  },
};
