class DomElHandler {
  constructor() {}

  getElementById(id) {
    const domEl = document.getElementById(id);
    return domEl;
  }

  setButtonHref(arrayOfIds) {
    for (let i = 0; i < arrayOfIds.length; i++) {
      const element = this.getElementById(arrayOfIds[i]);

      if (element) {
        element.href = `http://${arrayOfIds[i]}.com`;
      }
    }
  }

  setDisplayStyle(e) {
    e.preventDefault();
    dropDownMenu.style.display === "block"
      ? (dropDownMenu.style.display = "none")
      : (dropDownMenu.style.display = "block");
  }

  handleOpenDropDown() {
    // const activeDropDownMenu = false; //!! Home Work

    const [, dropDownMenu] = document.getElementsByClassName("drop-menu");
    const dropBtn = document.getElementById("click-drop-1");

    console.log(dropDownMenu);

    dropBtn.addEventListener("click", this.setDisplayStyle);
  }

  // handleCloseDropDown() {
  //   const specifiedElement = document.getElementById("click-drop");
  //   const [dropMenu] = document.getElementsByClassName("drop-menu");

  //   document.addEventListener("click", function (event) {
  //     const isClickInside = specifiedElement.contains(event.target);
  //     const isClickDropDown = dropMenu.contains(event.target);

  //     if (
  //       dropMenu.style.display === "block" &&
  //       !isClickInside &&
  //       !isClickDropDown
  //     ) {
  //       dropMenu.style.display = "none";
  //       return;
  //     }
  //   });
  // }
}

let instance = new DomElHandler();

instance.setButtonHref(["facebook", "youtube", "instagram", "does_not_exists"]);

instance.handleOpenDropDown();
// instance.handleCloseDropDown();

// slider

// class Slider {
//   constructor() {}

//   querySelector(classSliderBtn) {
//     const classOfBtn = document.querySelector(classSliderBtn);
//     return classOfBtn;
//   }

//   arrayOfImg() {
//     const leftBtn = newInstance.querySelector(".slider__left-btn");
//     const rightBtn = newInstance.querySelector(".slider__right-btn");
//   }
// }

// let newInstance = new Slider();
