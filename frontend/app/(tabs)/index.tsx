import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  
  const [connectionStatus, setConnectionStatus] = useState('더미 데이터 모드로 작동 중');

  useEffect(() => {
    /* API 연결을 잠시 중단합니다.
    fetch(`${API_URL}/`)
      .then((response) => response.text())
      .then((text) => {
        setConnectionStatus(`서버 상태: ${text}`);
      })
      .catch((error) => {
        setConnectionStatus('서버 연결 실패');
        console.error(error);
      });
    */
    
    
    console.log("홈 화면이 로드되었습니다.");
    console.log("대시보드 데이터를 더미로 로드했습니다.");
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>기자재 대여 시스템</Text>
      <Text style={styles.status}>{connectionStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  status: { fontSize: 16, color: 'blue' },
});