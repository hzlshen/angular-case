import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HeroFormComponent } from "./hero-form.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("HeroFormComponent", () => {

  let fixture: ComponentFixture<HeroFormComponent>;
  let component: HeroFormComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [HeroFormComponent]
    });

    fixture = TestBed.createComponent(HeroFormComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
