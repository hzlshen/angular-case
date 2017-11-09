import { NO_ERRORS_SCHEMA } from "@angular/core";
import { KeyupComponent } from "./keyup.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("KeyupComponent", () => {

  let fixture: ComponentFixture<KeyupComponent>;
  let component: KeyupComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [KeyupComponent]
    });

    fixture = TestBed.createComponent(KeyupComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
