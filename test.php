<?php

class A {
    public function __construct()
    {
        echo 'contruct';
    }

    public function a1()
    {
        echo 'a1';
    }

//    public static function a2()
//    {
//        echo 'a2';
//    }
    public function __call($name, $arguments)
    {
        echo $name;
    }

    public static function __callStatic($name, $arguments)
    {
        echo $name;
        echo $arguments[0];
    }
}

//$abc = new A();
//$abc->a3();

//$abc = A::a2();
$def = A::a3(123);
