---
sidebar_position: 3
title: 🌡️ 벌통 저울
navTitle: 벌통 저울
layout: products
---

벌통 저울은 추가 센서와 통신 칩이 포함된 스마트 IoT 저울입니다. 주기적으로 벌통 상태를 측정하고 데이터를 [Gratheon 웹 앱](/ko/products/web_app/)으로 전송합니다. 이 집계 데이터는 양봉가가 낮은 비용으로 현장의 봉군 상태를 원격 모니터링하도록 돕습니다.

하드웨어 방향은 [벌통 센서 문서](/docs/beehive-sensors/)에 설명되어 있으며, 앱은 측정값을 [벌통 원격 측정 저장소](/products/web_app/pro-tier/hive-telemetry-storage/)에 보관하고 [시계열 분석](/products/web_app/pro-tier/timeseries-data-analytics/)으로 비교합니다.

`status`: [TRL 4](https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/) (프로토타입)

## 문제 초점

이 제품은 다음 상황을 더 빨리 파악하는 데 도움을 줍니다.

- 분봉 징후
- 먹이 부족 또는 기아 위험
- 도봉 상태
- 곰이나 외부 충격으로 인한 피해
- 강풍으로 인한 벌통 전도
- 멀리 떨어진 양봉장 관리

## 대상 사용자

- 자주 방문하지 않고도 기본 신호를 보고 싶은 취미 양봉가
- 방문 우선순위를 정해야 하는 대규모 양봉가
- 원격 관찰 가치가 큰 도시·교육 양봉장

## 측정 목표

구성은 달라질 수 있지만 목표는 다음 신호를 결합하는 것입니다.

- 벌통 무게
- 내부 또는 주변 온도
- 습도
- 급격한 변화나 이벤트
- 배터리와 연결 상태

## 통합

벌통 저울은 별도 앱이 아니라 Gratheon 웹 앱의 동일한 데이터 모델로 지표를 전송합니다. 따라서 측정값을 점검, 급이, 날씨, 알림과 함께 비교할 수 있습니다.
