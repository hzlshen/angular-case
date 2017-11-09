import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ClickMeComponent } from "./click-me.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ClickMeComponent", () => {

  let fixture: ComponentFixture<ClickMeComponent>;
  let component: ClickMeComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ClickMeComponent]
    });

    fixture = TestBed.createComponent(ClickMeComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
