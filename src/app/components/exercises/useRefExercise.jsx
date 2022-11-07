import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const refBlock = useRef();
    const handleChange = () => {
        console.log(refBlock.current);
        refBlock.current.children[0].textContent = "text";
        refBlock.current.style.height = "150";
        refBlock.current.style.width = "80";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={refBlock}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-secondary mt-2" onClick={handleChange}>
                Изменить
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
