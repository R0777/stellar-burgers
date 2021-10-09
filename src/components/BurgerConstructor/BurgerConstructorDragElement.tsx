import React, {FC, useRef} from "react";
import s from "./burgerConstructor.module.scss";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {changePosition, deleteSelectedIngredient, TIngredient} from "../../services/store/ingredients/ingredientsSlice";
import {DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import {useDispatch} from "../../services/hooks";
import {XYCoord} from "dnd-core";

interface IBurgerConstructorDragElement {
    ingredient : TIngredient;
    index : number;
}

const BurgerConstructorDragElement : FC < IBurgerConstructorDragElement > = ({ingredient, index}) => {
    const dispatch = useDispatch();
    const ref = useRef < HTMLDivElement > (null);

    const [
        {
            handlerId
        },
        drop] = useDrop({
        accept: "sort",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            };
        },
        hover(item : any, monitor : DropTargetMonitor) {
            if (!ref.current) {
                return;
            }

            console.log(`item`, item);
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current
                ?.getBoundingClientRect();

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();

            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            dispatch(changePosition({dragIndex, hoverIndex}));

            item.index = hoverIndex;
        }
    });

    const [
        {
            isDragging
        },
        drag] = useDrag({
        type: "sort",
        item: () => {
            return {ingredient, index};
        },
        collect: (monitor : any) => ({
            isDragging: monitor.isDragging()
        })
    });

    const opacity = isDragging
        ? 0
        : 1;

    drag(drop(ref));

    return (
        <div
            className={s.lineElement}
            style={{
            opacity: opacity
        }}
            ref={ref}
            data-handler-id={handlerId}>
            <DragIcon type="primary"/>
            <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image_mobile}
                handleClose={() => {
                dispatch(deleteSelectedIngredient({ingredient: ingredient, index}));
            }}/>
        </div>
    );
};
export default BurgerConstructorDragElement;
