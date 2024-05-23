
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";

describe('App Component', () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [RouterTestingModule]
        }).compileComponents();
    })

    beforeEach(() => {
        // fixture creation
        fixture = TestBed.createComponent(AppComponent);
        // component creation (component = new AppComponent())
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should create the app', () => {
      expect(component).toBeTruthy();
    });
 
    it('should have as title `angular-jest-demo`', () => {
        expect(component.title).toEqual('angular-jest-demo');
    });

    it('should render title', () => {
        const compiledHtml = fixture.nativeElement as HTMLElement;
        expect(compiledHtml.querySelector('.content span')?.textContent)
        .toContain('angular-jest-demo app is running!');
    })
  
  })
  
