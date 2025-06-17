import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExampleService } from '../../services/example.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent
  implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() value: string = '';
  @Output() valueChanges: EventEmitter<string> = new EventEmitter()

  navigateToPath() {
    this.router.navigate(['/example', { exampleValue: this.value }])
  }

  constructor(private router: Router, private route: ActivatedRoute, private exampleService: ExampleService) {
    console.log('Constructor: component instance is created');
  }

  ngOnInit(): void {
    // run when component is initialized after the first ngOnChanges
    //listen params route changes
    this.route.queryParams.subscribe(params => {
      console.log("params", params);
    })

    // listen changes from services
    this.exampleService.data$.subscribe(data => {
      console.log("data: ", data);
    })
    console.log('ngOnInit: component initialization');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // run when @Input() value is changed
    console.log('ngOnChanges:', changes);
  }

  ngDoCheck(): void {
    // run when the component is checked for changes
    // (@Input() value is changed, after event handlers, on any other input, focus, etc., )
    // on Http response, timers, etc.
    // on manualy calling change detection ref
    console.log('ngDoCheck: custom change detection');
  }

  ngAfterContentInit(): void {
    // run when the content injeced via ng-content of the component is initialized
    console.log('ngAfterContentInit: content projected');
  }

  ngAfterContentChecked(): void {
    // run when the content injeced via ng-content of the component is checked for changes
    console.log('ngAfterContentChecked: content checked');
  }

  ngAfterViewInit(): void {
    // run when the internal view of the component is initialized
    console.log('ngAfterViewInit: view initialized');
  }

  ngAfterViewChecked(): void {
    // run when the internal view of the component is checked for changes
    console.log('ngAfterViewChecked: view checked');
  }

  ngOnDestroy(): void {
    // run right before the component is destroyed
    console.log('ngOnDestroy: cleanup before component is destroyed');
  }
}
